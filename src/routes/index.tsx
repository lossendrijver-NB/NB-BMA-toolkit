import { createFileRoute } from "@tanstack/react-router";
import { SearchExperience } from "@/components/SearchExperience";
import { AppShell } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOBEARS Kennisbank — Ambities, diensten & cases" },
      {
        name: "description",
        content:
          "Zoek in de NOBEARS-kennisbank naar klantambities, diensten, cases en de collega die je verder helpt.",
      },
      { property: "og:title", content: "NOBEARS Kennisbank" },
      {
        property: "og:description",
        content: "Ontdek klantambities, diensten en cases van NOBEARS.",
      },
    ],
  }),
  component: () => (
    <AppShell>
      <SearchExperience />
    </AppShell>
  ),
});
