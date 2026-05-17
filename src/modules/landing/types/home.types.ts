export type Feature = {
  title: string;
  description: string;
  icon: "moon" | "pulse" | "drop" | "phone";
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
