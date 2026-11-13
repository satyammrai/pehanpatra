import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface WorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'ML & AI', 'Full-Stack Apps', 'Websites'];

export function WorkSection({ onSelectProject }: WorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-balance">
              Selected Work
            </h2>
            <p className="mt-2.5 text-base text-zinc-600 max-w-xl">
              Tested ML &amp; ANN pipelines, live web apps like PDF Clean, and 12+ fast production websites shipped for research labs and clients.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-emerald-950/[0.04] border border-emerald-900/10 rounded-lg self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-700 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-700 to-teal-600 text-white shadow-xs'
                      : 'text-zinc-600 hover:text-emerald-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isWideFeatured = activeCategory === 'All' && index === 0;
            return (
              <article
                key={project.id}
                className={`group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-colors duration-200 hover:border-emerald-600/45 ${
                  isWideFeatured ? 'md:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-left flex flex-col flex-1 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-emerald-700"
                >
                  <div
                    className={`w-full overflow-hidden bg-zinc-100 border-b border-zinc-200 ${
                      isWideFeatured ? 'aspect-16/9 md:aspect-[21/10]' : 'aspect-4/3'
                    }`}
                  >
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackLabel={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 sm:p-8 pb-4 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500">
                      <span className="font-medium text-emerald-800">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      {project.recognition && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-amber-800">{project.recognition}</span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                      {project.summary}
                    </p>
                  </div>
                </button>

                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-zinc-100 flex items-center justify-between gap-4 text-sm font-medium">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-zinc-800 hover:text-emerald-700 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-emerald-700 rounded"
                  >
                    Read Case Study
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded"
                  >
                    <span>{project.liveLabel}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
