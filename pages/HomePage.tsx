
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { projects as allProjects } from '../data/projects';
import { Project, Filters } from '../types';
import FilterPanel from '../components/filters/FilterPanel';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectDetailView from './TaorminaPage'; // Repurposed TaorminaPage as the detail view
import CtaSection from '../components/shared/CtaSection';
import { NewHero } from '../components/NewHero';

const HomePage: React.FC = () => {
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash) {
        const project = allProjects.find(p => p.id.toString() === hash);
        if (project) {
          setSelectedProject(project);
          setTimeout(() => {
            detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          // If hash is invalid, clear selection
          setSelectedProject(null);
        }
      } else {
        // When hash is empty, deselect project
        setSelectedProject(null);
      }
    };
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial load check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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

  const handleProjectSelect = (project: Project) => {
    // The useEffect will handle setting the state and scrolling.
    window.location.hash = `/${project.id}`;
  };

  return (
    <>
      <NewHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
           <header className="text-center pb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Explore Our Properties
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Filter through our exclusive Reportage Properties to find your perfect match.
            </p>
          </header>
          
          <FilterPanel filters={filters} setFilters={setFilters} projectData={allProjects} />
          
          <ProjectGrid projects={filteredProjects} onProjectSelect={handleProjectSelect} />

          <div ref={detailRef} className="mt-8 pt-8 border-t-2 border-gray-800/50">
            {selectedProject ? (
              <ProjectDetailView project={selectedProject} />
            ) : (
              <CtaSection />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
