import { EXPERIENCE, PRINCIPLES, PROFILE, SKILL_GROUPS } from '../data/portfolio';

export function AboutExperience() {
  return (
    <>
      {/* About & Craft Philosophy */}
      <section
        id="about"
        className="py-16 sm:py-24 border-t border-zinc-200 bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/45"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-balance">
                Engineering tested ML and crisp interfaces end-to-end.
              </h2>
              <p className="mt-5 text-base text-zinc-600 leading-relaxed">
                I am a Computer Science Engineering student and builder focused on Applied Machine Learning, ANN modeling, LLM Evaluation &amp; Robustness, and modern full-stack web engineering.
              </p>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                From earning a Letter of Recommendation at BITS Pilani and a Research Certificate at IIITDM Kurnool to shipping 12+ client websites and 2 full-stack apps, my focus is simple: software that works reliably in real hands.
              </p>

              {/* Clean Education Block */}
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <div className="text-xs font-medium text-emerald-800 mb-1.5">Education</div>
                <div className="font-display text-base font-semibold text-zinc-950">
                  {PROFILE.education.degree}
                </div>
                <div className="mt-1 text-sm text-zinc-600">
                  {PROFILE.education.institution}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500 font-mono tabular-nums">
                  <span>{PROFILE.education.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>CGPA {PROFILE.education.cgpa}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-zinc-200 border-y border-zinc-200">
              {PRINCIPLES.map((principle) => (
                <div key={principle.number} className="py-6 sm:py-7 first:pt-2 sm:first:pt-0">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-zinc-950">
                    <span className="font-mono text-sm text-emerald-700 mr-3 tabular-nums">
                      {principle.number}
                    </span>
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Technical Capabilities */}
      <section id="experience" className="py-16 sm:py-24 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-balance">
                Experience
              </h2>
              <p className="mt-2 text-base text-zinc-600">
                Research internships, studio engineering, and independent client work.
              </p>
            </div>
          </div>

          <div className="divide-y divide-zinc-200 border border-zinc-200 bg-white rounded-2xl px-6 sm:px-8">
            {EXPERIENCE.map((item) => (
              <div
                key={`${item.period}-${item.company}`}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
              >
                <div className="md:col-span-3 font-mono text-sm text-emerald-800 tabular-nums">
                  {item.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg font-semibold text-zinc-950">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-sm text-zinc-500">
                    <span>{item.company}</span>
                    <span aria-hidden="true" className="mx-1.5">·</span>
                    <span>{item.location}</span>
                  </div>
                  {item.recognition && (
                    <div className="mt-1.5 text-xs font-medium text-amber-800">
                      {item.recognition}
                    </div>
                  )}
                </div>
                <p className="md:col-span-5 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Core Technical Stack */}
          <div className="mt-10 bg-gradient-to-br from-emerald-950 via-zinc-950 to-teal-950 text-white rounded-2xl p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                  Technical Toolkit
                </h3>
                <p className="mt-1 text-sm text-emerald-100/80">
                  Languages, ML frameworks, and web technologies I ship with every day.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="border-t border-white/15 pt-4">
                  <div className="text-xs font-medium text-emerald-300 mb-2.5">
                    {group.category}
                  </div>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
