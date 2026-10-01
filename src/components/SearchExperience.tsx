import { useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ambitionRepo, contactRepo, serviceRepo } from "@/content/repository";
import { clearBest, detectMode, rank, type SearchMode } from "@/lib/search";
import { cn } from "@/lib/utils";
import { ContactCard, ServiceCard, CardGrid } from "./ui-kit";

const LABEL: Record<SearchMode, string> = { ambition: "Ambitie", service: "Dienst" };
const PLACEHOLDER: Record<SearchMode, string> = {
  ambition: "Wat wil de klant bereiken?",
  service: "Wat voor dienst heeft de klant nodig?",
};

type Item = { id: string; title: string; slug: string };

export function SearchExperience() {
  const navigate = useNavigate();
  const ambitions = ambitionRepo.all();
  const services = serviceRepo.all();
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<SearchMode>("ambition");
  const [active, setActive] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState("");
  const manualLock = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  // Debounced auto-detection of content type.
  useEffect(() => {
    if (!query.trim()) return;
    const t = setTimeout(() => {
      if (manualLock.current === query) return;
      const out = detectMode(query, mode, ambitions, services);
      if (out.mode !== mode) {
        setMode(out.mode);
        setNotice(`Overgeschakeld naar ${LABEL[out.mode]}`);
      }
    }, 280);
    return () => clearTimeout(t);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 2200);
    return () => clearTimeout(t);
  }, [notice]);

  const results = useMemo(() => {
    const list: Item[] = mode === "ambition" ? ambitions : services;
    if (!query.trim()) return list.map((item) => ({ item, score: 0 }));
    return mode === "ambition" ? rank(query, ambitions) : rank(query, services);
  }, [query, mode, ambitions, services]);

  const items = results.map((r) => r.item).slice(0, 12);
  const noResults = query.trim().length > 0 && items.length === 0;

  function go(item: Item, m: SearchMode = mode) {
    if (m === "ambition") navigate({ to: "/ambitie/$slug", params: { slug: item.slug } });
    else navigate({ to: "/dienst/$slug", params: { slug: item.slug } });
  }

  function switchMode(m: SearchMode) {
    setMode(m);
    setActive(-1);
    manualLock.current = query;
    inputRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" && items.length) {
      e.preventDefault();
      setActive((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp" && items.length) {
      e.preventDefault();
      setActive((i) => (i <= 0 ? items.length - 1 : i - 1));
    } else if (e.key === "Escape") {
      if (active >= 0) setActive(-1);
      else {
        setQuery("");
        setSubmitted(false);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0 && items[active]) return go(items[active]);
      if (!query.trim()) return;
      const out = detectMode(query, mode, ambitions, services);
      const pool = out.mode === "ambition" ? out.ambitions : out.services;
      const best = clearBest<Item>(pool);
      if (best) return go(best, out.mode);
      if (out.mode !== mode) setMode(out.mode);
      setSubmitted(true);
    }
  }

  const fallbackServices = noResults
    ? rank(query, services, 10)
        .slice(0, 3)
        .map((r) => r.item)
    : [];
  const fallbackContact = contactRepo.fallback();

  return (
    <div className="mx-auto pt-16 sm:pt-24 md:pt-28 pb-16 text-center max-w-3xl px-4">
      {/* Editorial Hero Heading strictly matching Frame 1 & Frame 290 */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.12] text-balance">
        Wat wil je weten over
        <br />
        NOBEARS Amersfoort?
      </h1>

      {/* Floating Stadium Search Capsule */}
      <div className="mx-auto mt-8 sm:mt-10 max-w-2xl">
        <div className="flex h-14 items-center rounded-full border border-white/10 bg-[#161616]/95 p-1.5 pl-6 shadow-2xl backdrop-blur transition-all focus-within:border-white/25">
          <label htmlFor="q" className="sr-only">
            Zoeken in {LABEL[mode] === "Ambitie" ? "ambities" : "diensten"}
          </label>
          <input
            ref={inputRef}
            id="q"
            role="combobox"
            aria-expanded={items.length > 0}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(-1);
              setSubmitted(false);
              manualLock.current = null;
            }}
            onKeyDown={onKeyDown}
            placeholder={PLACEHOLDER[mode]}
            className="w-full bg-transparent text-base sm:text-lg text-white placeholder:text-neutral-500 outline-none"
          />
          {query && (
            <button
              type="button"
              aria-label="Zoekopdracht wissen"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="mr-2 grid size-8 shrink-0 place-items-center rounded-full text-neutral-400 hover:bg-[#282727] hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}

          {/* Segmented Pill Switch strictly styled as Frame 1 & 290 */}
          <div
            role="radiogroup"
            aria-label="Zoekmodus"
            className="flex items-center rounded-full bg-[#201f1f] p-1 border border-white/5 shrink-0"
          >
            {(["ambition", "service"] as const).map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={mode === m}
                onClick={() => switchMode(m)}
                className={cn(
                  "rounded-full px-4 sm:px-5 py-2 text-sm font-medium transition-all duration-200",
                  mode === m
                    ? "bg-[#282727] text-white shadow-sm"
                    : "text-neutral-400 hover:text-white",
                )}
              >
                {LABEL[m]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-3 h-5 text-sm text-[#F65C46]">
        {notice}
      </p>

      {/* Suggested chips matching Frame 1 and Frame 290 */}
      {!noResults && (
        <section className="mx-auto mt-6 max-w-2xl text-left">
          <h2 className="text-xs sm:text-sm text-neutral-400 font-normal mb-3">
            {submitted ? "Meerdere resultaten — kies wat je bedoelt" : "Voorgestelde diensten"}
          </h2>
          <ul id={listId} role="listbox" aria-label="Suggesties" className="flex flex-wrap gap-2.5">
            {items.map((item, i) => (
              <li key={item.id} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  tabIndex={-1}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => go(item)}
                  className={cn(
                    "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#FAFAFA] transition hover:bg-white/[0.08] hover:border-white/20",
                    i === active && "border-[#F65C46] bg-[#282727] ring-1 ring-[#F65C46]",
                  )}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {noResults && (
        <section
          aria-live="polite"
          className="mx-auto mt-8 max-w-2xl text-left animate-in fade-in duration-300"
        >
          <h2 className="text-xl sm:text-2xl font-medium text-white">
            We herkennen je zoekopdracht niet.
          </h2>
          {fallbackServices.length > 0 ? (
            <>
              <p className="mt-2 text-sm text-neutral-400">Bedoel je soms…</p>
              <div className="mt-6">
                <CardGrid>
                  {fallbackServices.map((s) => (
                    <ServiceCard key={s.id} service={s} />
                  ))}
                </CardGrid>
              </div>
            </>
          ) : (
            <p className="mt-2 text-sm text-neutral-400">
              Probeer een andere omschrijving, of wis je zoekopdracht om alle{" "}
              {mode === "ambition" ? "ambities" : "diensten"} te zien.
            </p>
          )}
          <div className="mt-8 max-w-md">
            {fallbackContact ? (
              <ContactCard
                person={fallbackContact}
                heading={`Niet gevonden wat je zoekt? Neem contact op met ${fallbackContact.name.split(" ")[0]}.`}
              />
            ) : (
              <p className="text-sm text-neutral-400">
                Niet gevonden wat je zoekt? Vraag het je teamleider.
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
