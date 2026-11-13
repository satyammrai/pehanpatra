import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-zinc-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-xs border-b border-zinc-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 min-w-0">
            <span className="truncate font-medium text-emerald-800">{project.client}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums shrink-0">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 text-zinc-800 hover:bg-emerald-700 hover:text-white transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-16/9 w-full bg-zinc-100 border-b border-zinc-200 overflow-hidden">
          <ResilientImage
            src={project.image}
            alt={project.imageAlt}
            fallbackLabel={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 mb-3">
            <span className="text-emerald-800 font-medium">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
            {project.recognition && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-amber-800">{project.recognition}</span>
              </>
            )}
          </div>

          <h2
            id="project-modal-title"
            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 text-balance"
          >
            {project.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-8 pt-8 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-zinc-950">Problem</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-950">Execution</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-950">Impact</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-zinc-500">
              <span className="font-medium text-zinc-900 mr-2">Highlights:</span>
              {project.deliverables.join(' · ')}
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 rounded-lg transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-700"
            >
              <span>{project.liveLabel}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
