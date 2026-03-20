import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore the TBC project portfolio — residential, commercial, office, and industrial construction projects across the Philippines. Filter by status: on-going or completed.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1A1A1A] overflow-hidden"
        aria-label="Projects page hero"
      >
        <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Our Projects
          </h1>
          <p className="mt-5 text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From luxury residences to commercial fit-outs — each project is a demonstration of
            TBC&rsquo;s commitment to quality, precision, and craftsmanship.
          </p>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500">{projects.length}</p>
              <p className="text-gray-400 text-sm mt-1">Total Projects</p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">
                {projects.filter((p) => p.status === 'ongoing').length}
              </p>
              <p className="text-gray-400 text-sm mt-1">On-Going</p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">
                {projects.filter((p) => p.status === 'completed').length}
              </p>
              <p className="text-gray-400 text-sm mt-1">Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="py-16 lg:py-24 bg-gray-50 min-h-screen" aria-label="Projects listing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
