'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project, ProjectStatus } from '@/data/projects';

interface ProjectsGridProps {
  projects: Project[];
}

type Filter = 'all' | ProjectStatus;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'ongoing', label: 'On-Going' },
  { value: 'completed', label: 'Completed' },
];

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.status === activeFilter);

  const counts = {
    all: projects.length,
    ongoing: projects.filter((p) => p.status === 'ongoing').length,
    completed: projects.filter((p) => p.status === 'completed').length,
  };

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Filter projects by status">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={activeFilter === value}
            onClick={() => setActiveFilter(value)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2
              ${activeFilter === value
                ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                : 'bg-white text-gray-600 hover:text-red-600 hover:bg-red-50 border border-gray-200 hover:border-red-200'}`}
          >
            {label}
            <span
              className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold
                ${activeFilter === value
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-500'}`}
              aria-label={`${counts[value]} projects`}
            >
              {counts[value]}
            </span>
          </button>
        ))}
      </div>

      {/* Count indicator */}
      <p className="text-gray-500 text-sm mb-8" aria-live="polite" aria-atomic="true">
        Showing <strong className="text-[#1A1A1A]">{filtered.length}</strong>{' '}
        {filtered.length === 1 ? 'project' : 'projects'}
        {activeFilter !== 'all' && (
          <span> &mdash; {filters.find((f) => f.value === activeFilter)?.label}</span>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">No projects found for this filter.</p>
        </div>
      )}
    </div>
  );
}
