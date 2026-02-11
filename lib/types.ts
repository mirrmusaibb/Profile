export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
};
