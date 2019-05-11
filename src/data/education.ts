export interface EducationItem {
  date: string;
  city: string;
  country: string;
  degree: string;
  organization: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    date: "2006 - 2009",
    city: "Warsaw",
    country: "pl",
    degree: "B.A. in Corporate Finance",
    organization: "Warsaw School of Economics",
    description: `Having reached national finals in state `,
  },
];
