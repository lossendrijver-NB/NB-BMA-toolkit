import { useNavigate } from "@tanstack/react-router";
import { useId, useMemo, useRef, useState } from "react";
import { ambitionRepo, serviceRepo } from "@/content/repository";
import { rank, type SearchMode } from "@/lib/search";
import { cn } from "@/lib/utils";

const PLACEHOLDER: Record<SearchMode, string> = {
  ambition: "Wat wil de klant bereiken?",
  service: "Wat voor dienst heeft de klant nodig?",
};

export function HeaderSearch({ initialMode = "ambition" }: { initialMode?: SearchMode }) {
  const navigate = useNavigate();
  const ambitions = ambitionRepo.all();
  const services = serviceRepo.all();
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<SearchMode>(initialMode);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return mode === "ambition"
      ? rank(query, ambitions).slice(0, 6)
      : rank(query, services).slice(0, 6);
  }, [query, mode, ambitions, services]);

  function go(item: { slug: string }, m: SearchMode = mode) {
    setIsOpen(false);
    setQuery("");
    if (m === "ambition") {
      navigate({ to: "/ambitie/$slug", params: { slug: item.slug } });
    } else {
      navigate({ to: "/dienst/$slug", params: { slug: item.slug } });
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" && results.length) {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length) {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0 && results[active]) {
        go(results[active].item);
      } else if (results.length > 0 && results[0]) {
        go(results[0].item);
      }
    }
  }

  return (
    <div className="relative">
      <div className="flex h-11 items-center rounded-full border border-white/10 bg-[#161616]/95 p-1 pl-4 shadow-sm backdrop-blur transition-all focus-within:border-white/20">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setActive(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          onKeyDown={onKeyDown}
          placeholder={PLACEHOLDER[mode]}
          className="w-36 bg-transparent text-xs text-white placeholder:text-neutral-400 outline-none sm:w-56 md:w-64 sm:text-sm"
        />

        <div
          role="radiogroup"
          aria-label="Zoekmodus"
          className="ml-2 flex items-center rounded-full bg-[#201f1f] p-0.5 text-xs border border-white/5 shrink-0"
        >
          <button
            type="button"
            role="radio"
            aria-checked={mode === "ambition"}
            onClick={() => {
              setMode("ambition");
              inputRef.current?.focus();
            }}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              mode === "ambition" ? "bg-[#282727] text-white" : "text-neutral-400 hover:text-white",
            )}
          >
            Ambitie
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === "service"}
            onClick={() => {
              setMode("service");
              inputRef.current?.focus();
            }}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              mode === "service" ? "bg-[#282727] text-white" : "text-neutral-400 hover:text-white",
            )}
          >
            Dienst
          </button>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <ul
          id={listId}
          className="absolute right-0 top-full z-50 mt-2 w-72 sm:w-80 rounded-2xl border border-white/10 bg-[#161616] p-1.5 shadow-2xl backdrop-blur animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {results.map(({ item }, i) => (
            <li key={item.id}>
              <button
                type="button"
                onMouseDown={() => go(item)}
                className={cn(
                  "w-full rounded-xl px-3.5 py-2 text-left text-xs sm:text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white",
                  i === active && "bg-white/[0.08] text-white",
                )}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
