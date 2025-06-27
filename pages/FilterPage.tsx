
import React, { useState, useMemo } from 'react';
import { projects as allProjects } from '../data/projects';
import { Filters, Project } from '../types';
import FilterPanel from '../components/filters/FilterPanel';
import ProjectGrid from '../components/projects/ProjectGrid';
import CtaSection from '../components/shared/CtaSection';
import { ArrowLeftIcon } from '../components/IconPack';

const FilterPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    price: { min: '', max: '' },
    unitTypes: [],
    cities: [],
    communities: [],
    projects: [],
    status: [],
    paymentPlans: [],
    amenities: [],
    views: [],
    offers: [],
  });

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => {
      const { price, unitTypes, cities, communities, projects, status, paymentPlans, amenities, views, offers } = filters;
      
      const minPrice = price.min ? parseFloat(price.min as string) : 0;
      const maxPrice = price.max ? parseFloat(price.max as string) : Infinity;

      if (p.startingPrice < minPrice || p.startingPrice > maxPrice) return false;
      if (cities.length && !cities.includes(p.city)) return false;
      if (communities.length && !communities.includes(p.community)) return false;
      if (projects.length && !projects.includes(p.name)) return false;
      if (status.length && !status.includes(p.status)) return false;

      if (unitTypes.length && !unitTypes.some(ut => p.unitTypes.includes(ut))) return false;
      if (paymentPlans.length && !paymentPlans.some(pp => p.paymentPlans.includes(pp))) return false;
      if (amenities.length && !amenities.every(am => p.amenities.includes(am))) return false;
      if (views.length && !views.some(v => p.views.includes(v))) return false;
      if (offers.length && !offers.some(o => p.offers.includes(o))) return false;

      return true;
    });
  }, [filters]);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#/';
  };

  const handleProjectSelect = (project: Project) => {
    window.location.hash = `/${project.id}`;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-8">
        <a href="#/" onClick={handleBackClick} className="inline-flex items-center text-gray-400 hover:text-[#b29a68] transition-colors font-semibold">
          <ArrowLeftIcon />
          Back to Showcase
        </a>
      </div>
      <header className="text-center pt-8 pb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
          Find Your Ideal Home
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Filter through our exclusive Reportage Properties to find your perfect match.
        </p>
      </header>
      
      <FilterPanel filters={filters} setFilters={setFilters} projectData={allProjects} />
      
      <ProjectGrid projects={filteredProjects} onProjectSelect={handleProjectSelect} />

      <CtaSection />
    </div>
  );
};

export default FilterPage;