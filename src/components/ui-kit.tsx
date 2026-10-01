import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Case, ContactPerson, Service } from "@/content/types";
import { NobearsLogo } from "./NobearsLogo";

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-glow opacity-100" />
    </div>
  );
}

export function AppShell({
  children,
  headerRight,
}: {
  children: ReactNode;
  headerRight?: ReactNode;
}) {
  return (
    <div className="relative isolate min-h-screen text-foreground">
      <AmbientBackground />
      <header className="mx-auto flex max-w-[1360px] items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <NobearsLogo />
        {headerRight && <div>{headerRight}</div>}
      </header>
      <main className="mx-auto max-w-[1360px] px-6 pb-24 sm:px-10">{children}</main>
    </div>
  );
}

export function BackButton(props: LinkProps & { label?: string }) {
  const { label = "Terug", ...rest } = props;
  return (
    <Link
      {...rest}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <ArrowLeft className="size-4" aria-hidden /> {label}
    </Link>
  );
}

export function DetailLayout({
  back,
  title,
  intro,
  body,
  aside,
  sectionTitle,
  children,
}: {
  back: ReactNode;
  title: string;
  intro?: string;
  body: string[];
  aside?: ReactNode;
  sectionTitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8 grid gap-12 lg:mt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      {/* Left Column matching Frame 292 & 293 */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 lg:sticky lg:top-10 lg:self-start">
        {back}
        <h1 className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl text-balance">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#C3C3C3] max-w-lg">
          {intro && <p>{intro}</p>}
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {aside && <div className="mt-8">{aside}</div>}
      </div>

      {/* Right Column matching Frame 292 & 293 */}
      <section aria-labelledby="related" className="animate-in fade-in duration-500 min-w-0">
        {sectionTitle && (
          <h2 id="related" className="text-xl sm:text-2xl font-medium text-white mb-6">
            {sectionTitle}
          </h2>
        )}
        <div>{children}</div>
      </section>
    </div>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <ul className="grid gap-4 sm:grid-cols-2">{children}</ul>;
}

export function ServiceCard({ service, from }: { service: Service; from?: string }) {
  return (
    <li>
      <Link
        to="/dienst/$slug"
        params={{ slug: service.slug }}
        search={from ? { from } : {}}
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#161616] p-3 transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
          <img
            src={service.image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-2 pt-3">
          <h3 className="text-base sm:text-lg font-medium text-white">{service.title}</h3>
          <p className="mt-1 flex-1 text-sm text-neutral-400 line-clamp-2">
            {service.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#F65C46] transition group-hover:text-[#ff7865]">
            Ontdek meer{" "}
            <ArrowUpRight
              className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </li>
  );
}

export function CaseCard({ item }: { item: Case }) {
  return (
    <article className="group mb-8">
      {/* 16:9 or 16:10 wide showcase banner strictly matching Frame 293 */}
      <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl">
        <img
          src={item.image}
          alt={`${item.clientName} — ${item.title}`}
          loading="lazy"
          className="size-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-base sm:text-lg font-medium text-white">
          <span className="font-medium text-white">{item.clientName}</span>{" "}
          <span className="text-neutral-500">•</span>{" "}
          <span className="font-normal text-white">{item.title}</span>
        </h3>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed max-w-3xl">
          {item.shortDescription}
        </p>
      </div>
      <div className="mt-8 border-b border-white/10" />
    </article>
  );
}

export function ContactCard({
  person,
  heading = "Vragen? Neem contact op",
}: {
  person: ContactPerson;
  heading?: string;
}) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <aside
      aria-label="Contactpersoon"
      className="rounded-2xl border border-white/10 bg-[#201f1f] p-6 text-left max-w-md shadow-xl"
    >
      <h3 className="text-base sm:text-lg font-medium text-white mb-3">{heading}</h3>
      <p className="text-sm leading-relaxed text-[#C3C3C3]">
        Mail {person.name} op{" "}
        <a
          href={`mailto:${person.email}`}
          className="text-white underline hover:text-[#F65C46] transition"
        >
          {person.email}
        </a>
        {person.phone && (
          <>
            {" "}
            of bel ons op{" "}
            <a
              href={`tel:${person.phone.replace(/\s/g, "")}`}
              className="text-white underline hover:text-[#F65C46] transition"
            >
              {person.phone}
            </a>
            .
          </>
        )}
      </p>

      {/* Profile avatar row matching Frame 293 with rounded-lg square avatar */}
      <div className="mt-5 flex items-center gap-3.5">
        {person.photo ? (
          <img
            src={person.photo}
            alt=""
            className="size-12 rounded-lg object-cover bg-neutral-800"
          />
        ) : (
          <div
            aria-hidden
            className="grid size-12 place-items-center rounded-lg bg-[#282727] text-sm font-medium text-white"
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-medium text-white text-base leading-tight">{person.name}</p>
          <p className="text-xs text-neutral-400 mt-0.5">{person.role}</p>
        </div>
      </div>
    </aside>
  );
}
