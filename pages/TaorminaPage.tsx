
import React from 'react';
import type { Project } from '../types';

import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Location from '../components/Location';
import Materials from '../components/Materials';
import Design from '../components/Design';
import Amenities from '../components/Amenities';
import UnitTypes from '../components/UnitTypes';
import Register from '../components/Register';

interface ProjectDetailViewProps {
  project: Project;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  return (
    <>
      <Hero title={project.name} tagline={project.tagline} heroImage={project.heroImage} />
      <Navigation />
      <About name={project.name} description={project.description} />
      <Location attractions={project.attractions} />
      <Materials />
      <Design design={project.design} />
      <Amenities amenities={project.amenities} />
      <UnitTypes unitDetails={project.unitDetails} />
      <Register projectName={project.name} />
    </>
  );
};

export default ProjectDetailView;
