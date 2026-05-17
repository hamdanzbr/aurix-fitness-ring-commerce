import { FaqItem, Feature, Testimonial } from "../types/home.types";

export const features: Feature[] = [
  {
    title: "Advanced Sleep Architecture",
    description: "Detailed tracking for REM, Deep, and Light sleep stages with nightly restorative scores.",
    icon: "moon",
    featured: true,
  },
  {
    title: "Continuous HR",
    description: "24/7 heart rate monitoring with abnormal spike alerts.",
    icon: "pulse",
  },
  {
    title: "100m Water Proof",
    description: "Swim, shower, or dive without taking it off.",
    icon: "drop",
  },
  {
    title: "Personalized Insights",
    description: "The Aurix App turns raw data into actionable habits to improve daily performance.",
    icon: "phone",
    featured: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The readiness score changed how I schedule heavy training days. It feels precise without feeling clinical.",
    author: "Maya Chen",
    role: "Founder, CoreLab",
  },
  {
    quote: "Aurix is the first tracker I forgot I was wearing. The data quality is the reason I kept it on.",
    author: "Andre Nolan",
    role: "Endurance Coach",
  },
  {
    quote: "Beautiful hardware, calm app, and sleep insights that are actually easy to act on.",
    author: "Leah Stone",
    role: "Product Lead",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How long does the battery last?",
    answer: "Aurix is designed for up to seven days of typical use, with fast charging for overnight tracking continuity.",
  },
  {
    question: "Can I wear it while swimming?",
    answer: "Yes. The ring is built for daily wear, showers, and swimming with 100m water resistance.",
  },
  {
    question: "Does it require a subscription?",
    answer: "Core activity, sleep, readiness, and heart metrics are included. Premium coaching can be added later.",
  },
];
