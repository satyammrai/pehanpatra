import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { EXPERIENCE, PROFILE, SKILL_GROUPS } from '../data/portfolio';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;

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
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-zinc-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-xs border-b border-zinc-200">
          <span className="text-sm font-medium text-emerald-800">Curriculum Vitae</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print</span>
            </button>
            <a
              href={PROFILE.resumePdfUrl}
              download="Satyam_Rai_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 rounded-lg transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="border-b border-zinc-200 pb-6">
            <h2 id="resume-modal-title" className="font-display text-2xl sm:text-3xl font-semibold text-zinc-950">
              {PROFILE.fullName}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-zinc-600">
              {PROFILE.title} · {PROFILE.location} · {PROFILE.email}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">Experience</h3>
            <div className="space-y-6">
              {EXPERIENCE.map((item) => (
                <div key={`${item.period}-${item.company}`} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-4 font-mono text-xs sm:text-sm text-emerald-800 tabular-nums">
                    {item.period}
                  </div>
                  <div className="sm:col-span-8">
                    <div className="font-semibold text-zinc-950 text-sm sm:text-base">
                      {item.role} — {item.company}
                    </div>
                    {item.recognition && (
                      <div className="mt-0.5 text-xs font-medium text-amber-800">
                        {item.recognition}
                      </div>
                    )}
                    <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-950 mb-3">Education</h3>
            <div className="text-sm text-zinc-700">
              <span className="font-semibold text-zinc-950">{PROFILE.education.degree}</span> ·{' '}
              {PROFILE.education.institution} ({PROFILE.education.period}) · CGPA {PROFILE.education.cgpa}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-950 mb-3">Technical Skills</h3>
            <div className="space-y-2 text-sm text-zinc-600">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category}>
                  <span className="font-medium text-zinc-900">{group.category}:</span>{' '}
                  {group.items.join(', ')}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
