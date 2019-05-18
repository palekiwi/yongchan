export interface Project {
  frontmatter: {
    title: string;
    image: any;
    tags: string[];
    tech: string[];
    date: string;
    url: string;
    repo: string;
  };
  fields: {
    slug: string;
  };
  html: any;
}
