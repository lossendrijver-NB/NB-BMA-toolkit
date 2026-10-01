// Data-access layer. The UI only talks to these functions, so the storage
// (local TS today, a CMS or database later) can change without touching components.
import { ambitions, cases, contacts, services as rawServices, DEFAULT_CONTACT_ID } from "./data";
import type { Ambition, Case, ContactPerson, Service } from "./types";

const services: Service[] = rawServices.map((s) => ({
  ...s,
  caseIds: cases.filter((c) => c.serviceIds.includes(s.id)).map((c) => c.id),
  ambitionIds: ambitions.filter((a) => a.serviceIds.includes(s.id)).map((a) => a.id),
}));

const byId = <T extends { id: string }>(list: T[], ids: string[]) =>
  ids.map((id) => list.find((x) => x.id === id)).filter((x): x is T => Boolean(x));

export const ambitionRepo = {
  all: (): Ambition[] => ambitions,
  bySlug: (slug: string) => ambitions.find((a) => a.slug === slug),
};

export const serviceRepo = {
  all: (): Service[] => services,
  bySlug: (slug: string) => services.find((s) => s.slug === slug),
  forAmbition: (a: Ambition) => byId(services, a.serviceIds),
};

export const caseRepo = {
  all: (): Case[] => cases,
  forService: (s: Service) => cases.filter((c) => c.serviceIds.includes(s.id)),
};

export const contactRepo = {
  byId: (id?: string): ContactPerson | undefined =>
    id ? contacts.find((c) => c.id === id) : undefined,
  fallback: () => contacts.find((c) => c.id === DEFAULT_CONTACT_ID),
};
