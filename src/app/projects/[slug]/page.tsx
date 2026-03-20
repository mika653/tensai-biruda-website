import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<'/projects/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.type === project.type)
    .slice(0, 3);

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3 - relatedProjects.length);

  const suggestions = [...relatedProjects, ...otherProjects].slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative h-[55vh] min-h-72 max-h-[600px] overflow-hidden"
        aria-label={`${project.title} hero image`}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} — TBC project`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" aria-hidden="true" />

        {/* Back link */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Status */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold tracking-wide uppercase mb-3
                ${project.status === 'ongoing'
                  ? 'bg-amber-500/90 text-white'
                  : 'bg-emerald-600/90 text-white'}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0
                  ${project.status === 'ongoing' ? 'bg-white animate-pulse' : 'bg-white'}`}
                aria-hidden="true"
              />
              {project.status === 'ongoing' ? 'On-Going' : 'Completed'}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ===== PROJECT DETAILS ===== */}
      <section className="py-14 lg:py-20 bg-white" aria-label="Project information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-[#1A1A1A] font-bold text-xl sm:text-2xl mb-5">
                About This Project
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metadata sidebar */}
            <aside
              className="bg-gray-50 rounded-xl p-7 border border-gray-100 h-fit"
              aria-label="Project details"
            >
              <h3 className="text-[#1A1A1A] font-bold text-sm tracking-widest uppercase mb-6">
                Project Details
              </h3>
              <dl className="space-y-5">
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-widest mb-1">Type</dt>
                  <dd className="text-[#1A1A1A] text-sm font-semibold">{project.type}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-widest mb-1">Location</dt>
                  <dd className="text-[#1A1A1A] text-sm font-semibold">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-widest mb-1">Status</dt>
                  <dd>
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold
                        ${project.status === 'ongoing' ? 'text-amber-600' : 'text-emerald-600'}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0
                          ${project.status === 'ongoing' ? 'bg-amber-500' : 'bg-emerald-500'}`}
                        aria-hidden="true"
                      />
                      {project.status === 'ongoing' ? 'On-Going' : 'Completed'}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-widest mb-1">Photos</dt>
                  <dd className="text-[#1A1A1A] text-sm font-semibold">
                    {project.images.length} image{project.images.length !== 1 ? 's' : ''}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm mb-4">Interested in a similar project?</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                >
                  Get a Quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== IMAGE GALLERY ===== */}
      <section className="pb-20 lg:pb-28 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="gallery-heading"
            className="text-[#1A1A1A] font-bold text-xl sm:text-2xl mb-8"
          >
            Project Gallery
          </h2>

          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </section>

      {/* ===== RELATED / MORE PROJECTS ===== */}
      {suggestions.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="more-projects-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2
                id="more-projects-heading"
                className="text-[#1A1A1A] font-bold text-xl sm:text-2xl"
              >
                More Projects
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((p) => {
                // Inline minimal card to avoid circular import complexity
                return (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-1">{p.type}</p>
                      <h3 className="text-[#1A1A1A] font-bold text-sm leading-snug group-hover:text-red-600 transition-colors">{p.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
