
export interface Project {
  id: number;
  name: string;
  community: string;
  city: string;
  startingPrice: number;
  unitTypes: string[];
  status: 'Ready' | 'Under Construction' | 'Off-plan';
  paymentPlans: string[];
  amenities: string[];
  views: string[];
  offers: string[];
  imageUrl: string;
  tags: string[];
  handoverDate: string;
  // New detailed properties
  tagline: string;
  heroImage: string;
  description: string;
  design: {
    architecturalElegance: string;
    refinedInteriors: string;
  };
  attractions: Attraction[];
  unitDetails: UnitType[];
}

export interface Filters {
  price: { min: number | string; max: number | string };
  unitTypes: string[];
  cities: string;
  communities: string;
  projects: string[];
  status: string[];
  paymentPlans: string[];
  amenities: string[];
  views: string[];
  offers: string[];
  handoverDates: string;
}

export interface Attraction {
  time: string;
  name: string;
  icon: React.ReactNode;
}

export interface Material {
  name: string;
  icon: React.ReactNode;
}

export interface Amenity {
  name: string;
  icon: React.ReactNode;
}

export interface UnitType {
  name: string;
  subtypes: string[];
  image: string;
}
