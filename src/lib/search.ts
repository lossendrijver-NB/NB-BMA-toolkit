// Local, deterministic search. Pure functions, no UI. A semantic/AI ranker can
// later be added by implementing another `scoreItem` and merging scores.
export type SearchMode = "ambition" | "service";

export type Searchable = {
  id: string;
  title: string;
  slug: string;
  searchTerms: string[];
  shortDescription: string;
};

export type ScoredResult<T> = { item: T; score: number };

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let last = prev[0]!;
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j]!;
      prev[j] = Math.min(prev[j]! + 1, prev[j - 1]! + 1, last + (a[i - 1] === b[j - 1] ? 0 : 1));
      last = tmp;
    }
  }
  return prev[b.length]!;
}

/** Does query word q fuzzily match any word in the text? */
function wordFuzzy(q: string, words: string[]) {
  const tol = q.length >= 7 ? 2 : q.length >= 4 ? 1 : 0;
  return words.some(
    (w) =>
      w.startsWith(q) ||
      (tol > 0 &&
        (levenshtein(q, w) <= tol ||
          (w.length > q.length && levenshtein(q, w.slice(0, q.length)) <= tol))),
  );
}

const STOP = new Set([
  "een",
  "de",
  "het",
  "mijn",
  "en",
  "of",
  "van",
  "voor",
  "op",
  "in",
  "te",
  "naar",
  "ik",
  "wil",
  "we",
]);

/** Score 0..100. Priority: exact title > strong title > exact term > partial > fuzzy > description. */
export function scoreItem(query: string, item: Searchable): number {
  const q = normalize(query);
  if (!q) return 0;
  const title = normalize(item.title);
  const slug = item.slug.replace(/-/g, " ");
  const terms = item.searchTerms.map(normalize);

  if (q === title || q === slug) return 100;
  if (title.startsWith(q) && q.length >= 3) return 90;
  if (terms.includes(q)) return 85;
  if (q.length >= 3 && title.includes(q)) return 75;
  if (q.length >= 3 && terms.some((t) => t.startsWith(q) || t.includes(q))) return 65;
  if (q.length >= 5 && (q.includes(title) || terms.some((t) => t.length >= 4 && q.includes(t))))
    return 60;

  const qWords = q.split(" ").filter((w) => w.length >= 2 && !STOP.has(w));
  if (!qWords.length) return 0;
  const titleWords = title.split(" ");
  const termWords = terms.flatMap((t) => t.split(" "));
  const hitTitle = qWords.filter((w) => wordFuzzy(w, titleWords)).length / qWords.length;
  const hitTerms = qWords.filter((w) => wordFuzzy(w, termWords)).length / qWords.length;
  const fuzzy = Math.max(hitTitle * 70, hitTerms * 55);
  if (fuzzy >= 25) return Math.round(fuzzy);

  const descWords = normalize(item.shortDescription).split(" ");
  const hitDesc =
    qWords.filter((w) => w.length >= 4 && descWords.some((d) => d.startsWith(w))).length /
    qWords.length;
  return hitDesc >= 0.5 ? Math.round(hitDesc * 20) : 0;
}

export const MIN_SCORE = 25;
export const CLEAR_MATCH = 85;
/** Margin the other type needs to beat the current mode before auto-switching. */
export const SWITCH_MARGIN = 15;

export function rank<T extends Searchable>(
  query: string,
  items: T[],
  min = MIN_SCORE,
): ScoredResult<T>[] {
  return items
    .map((item) => ({ item, score: scoreItem(query, item) }))
    .filter((r) => r.score >= min)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, "nl"));
}

export type SearchOutcome<A, S> = {
  mode: SearchMode;
  ambitions: ScoredResult<A>[];
  services: ScoredResult<S>[];
};

/** Decide which mode the query belongs to. Keeps current mode unless the other is clearly stronger. */
export function detectMode<A extends Searchable, S extends Searchable>(
  query: string,
  current: SearchMode,
  ambitions: A[],
  services: S[],
): SearchOutcome<A, S> {
  const ra = rank(query, ambitions);
  const rs = rank(query, services);
  const top = { ambition: ra[0]?.score ?? 0, service: rs[0]?.score ?? 0 };
  const other: SearchMode = current === "ambition" ? "service" : "ambition";
  let mode = current;
  if (top[other] >= 60 && top[other] >= top[current] + SWITCH_MARGIN) mode = other;
  return { mode, ambitions: ra, services: rs };
}

/** Best match only when unambiguous: clear score and clearly ahead of runner-up. */
export function clearBest<T>(results: ScoredResult<T>[]): T | undefined {
  const [a, b] = results;
  if (!a) return undefined;
  if (a.score >= CLEAR_MATCH && (!b || a.score - b.score >= 10)) return a.item;
  if (results.length === 1 && a.score >= 60) return a.item;
  return undefined;
}
