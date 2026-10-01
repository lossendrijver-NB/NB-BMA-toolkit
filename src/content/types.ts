export type Ambition = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string[];
  searchTerms: string[];
  serviceIds: string[];
  contactPersonId?: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string[];
  image: string;
  searchTerms: string[];
  ambitionIds: string[];
  caseIds: string[];
  contactPersonId?: string;
};

export type Case = {
  id: string;
  clientName: string;
  title: string;
  slug: string;
  image: string;
  shortDescription: string;
  serviceIds: string[];
};

export type ContactPerson = {
  id: string;
  name: string;
  role: string;
  photo?: string;
  email: string;
  phone?: string;
  note?: string;
  isPlaceholder?: boolean;
};
