export type ProjectCategory = 'Todos' | 'Comercial' | 'Residencial' | 'Industrial' | 'Infraestructura' | 'Diseño';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  city: string;
  area: string; // e.g., "12,500 m²"
  year: string;
  status: 'Completado' | 'En Ejecución' | 'En Planificación';
  description: string;
  fullDetails: string;
  image: string;
  gallery: string[];
  client: string;
  architectureLead: string;
  keyFeatures: string[];
  coordinates?: { lat: number; lng: number };
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string; // Lucide icon name
  features: string[];
  deliverables: string[];
  image?: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface LocationPin {
  id: string;
  city: string;
  region: string;
  projectCount: number;
  featuredProject: string;
  coordinates: { x: number; y: number }; // percentage on map canvas
  address: string;
  phone: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
  projectType: string;
}

export interface QuoteFormData {
  projectType: string;
  areaSize: number;
  finishLevel: 'Estándar' | 'Premium' | 'Deluxe Arquitectónico';
  city: string;
  timeframe: string;
  hasBlueprint: boolean;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  comments?: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}
