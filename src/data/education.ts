export interface EducationItem {
  date: string;
  city: string;
  country: string;
  degree: string;
  organization: string;
  description: string[];
}

export const education: EducationItem[] = [
  {
    date: "2006 - 2009",
    city: "Warsaw",
    country: "pl",
    degree: "B.A. in Corporate Finance",
    organization: "Warsaw School of Economics",
    description: [
      "I entered Poland's most prestigious business school with the 6th best result countrywide, having reached national finals in two high school olympiads (economics and English) and scoring close to 100% in math exams.",
      "For three years, I volunteered in AIESEC, a global student organization, on projects of national and international scale.",
      "Eventually, I graduated with a mark of 5.0/5.5 and left for Asia.",
    ],
  },
];
