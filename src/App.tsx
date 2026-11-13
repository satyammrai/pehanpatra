import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { AboutExperience } from './components/AboutExperience';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PROFILE, ProjectItem } from './data/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBF9] text-zinc-900">
      <Header />

      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <WorkSection onSelectProject={setSelectedProject} />
        <AboutExperience />
        <ContactSection />
      </main>

      <footer className="border-t border-zinc-200 bg-[#FAFBF9] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>
            &copy; {new Date().getFullYear()} {PROFILE.fullName}. Crafted with care in {PROFILE.location}.
          </span>
          <a
            href="#top"
            className="hover:text-zinc-950 transition-colors font-medium whitespace-nowrap"
          >
            Back to Top
          </a>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
