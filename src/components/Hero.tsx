import { ArrowDownRight, FileText } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onOpenResume: () => void;
}

const MARQUEE_ITEMS = [
  '12+ Production Websites',
  '2 Full-Stack Apps',
  'BITS Pilani LOR',
  'Applied ML & ANN',
  'LLM Evaluation',
  'Python · C++ · C · TypeScript',
];

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="top"
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-8 bg-gradient-to-br from-amber-50/75 via-[#FAFBF8] to-emerald-50/85"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 mb-6">
                <span className="font-medium text-emerald-800">{PROFILE.title}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE.location}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.08] text-zinc-950 text-balance max-w-2xl">
                Building practical{' '}
                <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  ML systems
                </span>{' '}
                and fast, reliable web products.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                {PROFILE.heroLead}
              </p>

              <p className="mt-4 text-sm font-medium text-emerald-900/90 max-w-xl">
                {PROFILE.recognitionNote}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-emerald-600/40 hover:text-emerald-900 rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <FileText className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-80 sm:h-[420px] lg:h-full lg:min-h-[430px] w-full overflow-hidden rounded-2xl border border-amber-900/15 bg-gradient-to-br from-amber-100/70 to-emerald-50/70 shadow-sm">
              <ResilientImage
                src={PROFILE.heroImage}
                alt={PROFILE.heroImageAlt}
                fallbackLabel={PROFILE.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-200/90 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {PROFILE.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 tabular-nums">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Editorial Marquee Divider */}
      <div
        className="mt-14 border-y border-emerald-900/10 bg-gradient-to-r from-amber-50/40 via-white to-emerald-50/50 py-3.5 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="animate-marquee text-xs sm:text-sm font-medium text-zinc-600 tracking-wide">
          {[0, 1, 2, 3].map((copy) => (
            <div key={copy} className="flex items-center">
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="inline-flex items-center">
                  <span className="px-5 whitespace-nowrap">{item}</span>
                  <span className="text-emerald-600/50">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
