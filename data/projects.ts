
import React from 'react';
import { Project } from '../types';

// Helper to determine status from handover date
const getStatus = (handoverDate: string): 'Ready' | 'Under Construction' | 'Off-plan' => {
  if (!handoverDate) return 'Off-plan';
  if (handoverDate.toUpperCase() === 'HANDOVER') return 'Ready';
  // Simple check if it's a future date (contains a year like 2024+)
  if (/\b(202[4-9]|20[3-9]\d)\b/.test(handoverDate)) return 'Under Construction';
  return 'Off-plan';
};

const projectDataList = [
  { country: 'Abu Dhabi', name: 'BAARUS THE DISTRICT', handover: 'Q1 2029', location: 'Al Seef District, Al Raha, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'MARN 2', handover: 'Q2 2029', location: 'Al Reem, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'MARLIN', handover: 'Q4 2027', location: 'Al Reem, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'REPORTAGE TOWER', handover: 'Q4 2028', location: 'Al Maryah Island, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'VISTA 3', handover: 'Q4 2027', location: 'Al Reem, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'MVI', handover: 'Q2 2024', location: 'Al Maryah Island, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'MV2', handover: 'Q4 2026', location: 'Al Maryah Island, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'ROYAL PARK', handover: 'Q4 2027', location: 'Masdar City' },
  { country: 'Abu Dhabi', name: 'SELINA BAY', handover: 'Q4 2027', location: 'Yas West in Yas Island, Abu Dhabi' },
  { country: 'Abu Dhabi', name: 'KHALIFA REPORTAGE VILLAGE ABU DHABI', handover: 'Q3 2028', location: 'Khalifa City' },
  { country: 'Abu Dhabi', name: 'PERLA 3', handover: 'Q2 2027', location: 'Yas West, Yas Island' },
  { country: 'Abu Dhabi', name: 'PERLA 1 & 2', handover: 'Q4 2025', location: 'Yas West, Yas Island' },
  { country: 'Abu Dhabi', name: 'PLAZA 2', handover: 'Q2 2026', location: 'Masdar City' },
  { country: 'Abu Dhabi', name: 'PLAZA 1', handover: 'Q4 2025', location: 'Masdar City' },
  { country: 'Abu Dhabi', name: 'DIVA 1 & 2', handover: 'Q3 2025', location: 'Yas Island' },
  { country: 'Abu Dhabi', name: 'ALRANA I LOFTS 1', handover: 'HANDOVER', location: 'Al Raha' },
  { country: 'Abu Dhabi', name: 'AL RAHA 2 LOFTS 2', handover: 'HANDOVER', location: 'Al Raha' },
  { country: 'Abu Dhabi', name: 'OASIS & OASIS 2', handover: 'HANDOVER', location: 'Masdar City' },
  { country: 'Abu Dhabi', name: 'THE GATE', handover: 'Q1 2024', location: 'Masdar City' },
  { country: 'Dubai', name: 'REPORTAGE HILLS', handover: 'Q4 2028', location: 'Dubai Hills' },
  { country: 'Dubai', name: 'TAORMINA VILLAGE 2', handover: 'Q4 2028', location: 'Dubai Land' },
  { country: 'Dubai', name: 'TAORMINA VILLAGE 1', handover: 'Q4 2027', location: 'Dubai Land' },
  { country: 'Dubai', name: 'REPORTAGE VILLAGE', handover: 'Q4 2027', location: 'Dubai Land' },
  { country: 'Dubai', name: 'BIANCA', handover: 'Q4 2025', location: 'Dubai Land' },
  { country: 'Dubai', name: 'ALBA', handover: 'Q4 2027', location: 'Al Satwa, Dubai' },
  { country: 'Dubai', name: 'VERDANA TH PHASE 2', handover: 'Q4 2026', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA TH PHASE 1', handover: 'Q1 2026', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 2 RESIDENCES', handover: 'Q4 2026', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA RESIDENCES 1', handover: 'Q1 2026', location: 'DIP' },
  { country: 'Dubai', name: 'RUKAN TOWER', handover: 'HANDOVER', location: 'Dubai Land' },
  { country: 'Dubai', name: 'RUKAN LOFT 2', handover: 'Q4 2024', location: 'Dubai Land' },
  { country: 'Dubai', name: 'ALEXIS TOWER', handover: 'Q2 2024', location: 'Downtown Jebel Ali' },
  { country: 'Dubai', name: 'VERDANA 3 RESIDENCES', handover: 'Q4 2027', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 4 TH', handover: 'Q2 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 5 RESIDENCES', handover: 'Q2 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 5 TH', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 6 RESIDENCES', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 6 TH', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 7 RESIDENCES', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 7 TH', handover: 'Q4 2028', location: '' },
  { country: 'Dubai', name: 'VERDANA 8 RESIDENCES', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 10 TH', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Dubai', name: 'VERDANA 10 RESIDENCES', handover: 'Q4 2028', location: 'DIP' },
  { country: 'Egypt', name: 'MOTS', handover: '', location: '' },
  { country: 'Egypt', name: 'MONTE NAPOLEONE', handover: 'Q4 2026', location: 'Mostakbal City, Egypt' },
  { country: 'Egypt', name: 'AOTEA PHASE 2', handover: 'Q4 2028', location: '' },
  { country: 'Turkey', name: 'SYLVANA', handover: 'Q1 2026', location: 'Istanbul' },
  { country: 'Pakistan', name: 'WERS', handover: '', location: 'LAHORE PAKISTAN' },
  { country: 'Saudi Arabia', name: 'NAJD TWD', handover: '', location: '' },
  { country: 'Baku', name: 'Baku Project 1', handover: '', location: '' },
  { country: 'Baku', name: 'Baku Project 2', handover: '', location: '' },
  { country: 'Uganda', name: 'VICTORIA ALM', handover: '', location: '' },
  { country: 'Uganda', name: 'CHAYYABHAN THIEL', handover: 'Q2 2029', location: 'Kampala' },
  { country: 'Rwanda', name: 'GADYO HEIGHTS', handover: 'Handover', location: '' },
  { country: 'Kenya', name: 'Kenya Project', handover: '', location: '' },
];

export const projects: Project[] = projectDataList.map((p, index) => ({
  id: index + 1,
  name: p.name,
  city: p.country, // Mapped from Country
  community: p.location, // Mapped from Location
  handoverDate: p.handover || '',
  status: getStatus(p.handover),
  
  // Default values for other properties
  startingPrice: 1000000 + (index * 50000), // Placeholder price
  unitTypes: ['Studio', '1BR', '2BR', '3BR', '4BR+', 'Villa', 'Townhouse'].slice(index % 5, index % 5 + 3), // Placeholder
  paymentPlans: [],
  amenities: [],
  views: [],
  offers: [],
  imageUrl: `https://picsum.photos/seed/${p.name.replace(/\s/g, '-')}/400/300`,
  tags: p.handover === 'HANDOVER' ? ['Ready'] : ['New'],
  tagline: `An exclusive project in ${p.location || p.country}`,
  heroImage: `https://picsum.photos/seed/${p.name.replace(/\s/g, '-')}-hero/1920/1080`,
  description: `Discover ${p.name}, a premier development located in the heart of ${p.location || p.country}. Offering a unique blend of luxury and comfort, this project is set to redefine urban living.`,
  design: {
    architecturalElegance: `The architecture of ${p.name} is a testament to modern design, blending form and function seamlessly.`,
    refinedInteriors: `Interiors at ${p.name} are crafted with the finest materials, offering residents a truly luxurious living experience.`,
  },
  attractions: [],
  unitDetails: [],
}));
