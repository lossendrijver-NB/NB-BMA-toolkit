import { createFileRoute, notFound } from "@tanstack/react-router";
import { ambitionRepo, contactRepo, serviceRepo } from "@/content/repository";
import { HeaderSearch } from "@/components/HeaderSearch";
import {
  AppShell,
  BackButton,
  CardGrid,
  ContactCard,
  DetailLayout,
  ServiceCard,
} from "@/components/ui-kit";

export const Route = createFileRoute("/ambitie/$slug")({
  loader: ({ params }) => {
    const ambition = ambitionRepo.bySlug(params.slug);
    if (!ambition) throw notFound();
    return { ambition };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Ambitie niet gevonden — NOBEARS" },
          { name: "robots", content: "noindex" },
        ],
      };
    const a = loaderData.ambition;
    return {
      meta: [
        { title: `${a.title} — NOBEARS Kennisbank` },
        { name: "description", content: a.shortDescription },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.shortDescription },
      ],
    };
  },
  component: AmbitionPage,
});

function AmbitionPage() {
  const { ambition } = Route.useLoaderData();
  const services = serviceRepo.forAmbition(ambition);
  const contact = contactRepo.byId(ambition.contactPersonId);

  return (
    <AppShell headerRight={<HeaderSearch initialMode="ambition" />}>
      <DetailLayout
        back={<BackButton to="/" />}
        title={ambition.title}
        body={ambition.description}
        aside={contact && <ContactCard person={contact} />}
        sectionTitle="Onze diensten die op deze ambitie aansluiten"
      >
        {services.length ? (
          <CardGrid>
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} from={ambition.slug} />
            ))}
          </CardGrid>
        ) : (
          <p className="text-neutral-400">Er zijn nog geen diensten aan deze ambitie gekoppeld.</p>
        )}
      </DetailLayout>
    </AppShell>
  );
}
