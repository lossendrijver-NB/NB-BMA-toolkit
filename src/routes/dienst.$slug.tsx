import { createFileRoute, notFound } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ambitionRepo, caseRepo, contactRepo, serviceRepo } from "@/content/repository";
import { HeaderSearch } from "@/components/HeaderSearch";
import { AppShell, BackButton, CaseCard, ContactCard, DetailLayout } from "@/components/ui-kit";

export const Route = createFileRoute("/dienst/$slug")({
  // `from` = slug of the ambition the user came from; drives the back button.
  validateSearch: zodValidator(z.object({ from: fallback(z.string(), "").optional() })),
  loader: ({ params }) => {
    const service = serviceRepo.bySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Dienst niet gevonden — NOBEARS" }, { name: "robots", content: "noindex" }],
      };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — NOBEARS Kennisbank` },
        { name: "description", content: s.shortDescription },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.shortDescription },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const { from } = Route.useSearch();
  const origin = from ? ambitionRepo.bySlug(from) : undefined;
  const linked = origin && origin.serviceIds.includes(service.id) ? origin : undefined;
  const cases = caseRepo.forService(service);
  const contact = contactRepo.byId(service.contactPersonId);

  return (
    <AppShell headerRight={<HeaderSearch initialMode="service" />}>
      <DetailLayout
        back={
          linked ? (
            <BackButton to="/ambitie/$slug" params={{ slug: linked.slug }} label="Terug" />
          ) : (
            <BackButton to="/" />
          )
        }
        title={service.title}
        body={service.description}
        aside={contact && <ContactCard person={contact} />}
      >
        {cases.length ? (
          <div>
            {cases.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>
        ) : (
          <p className="text-neutral-400">Er zijn nog geen cases aan deze dienst gekoppeld.</p>
        )}
      </DetailLayout>
    </AppShell>
  );
}
