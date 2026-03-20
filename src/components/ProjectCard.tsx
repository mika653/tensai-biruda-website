import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      aria-label={`View project: ${project.title}`}
    >
      {/* Image container */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100">
        <Image
          src={project.coverImage}
          alt={`${project.title} - ${project.type} in ${project.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
          aria-hidden="true"
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold tracking-wide uppercase
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
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-1.5">
          {project.type}
        </p>
        <h3 className="text-[#1A1A1A] font-bold text-base leading-snug mb-2 group-hover:text-red-600 transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </div>
        {/* Arrow indicator */}
        <div className="flex items-center gap-1 mt-4 text-red-600 text-sm font-medium opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
          <span>View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
