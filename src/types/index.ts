export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: "Hardware" | "Digital";
  description: string;
  image: string;
  specs: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}
