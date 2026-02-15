import { HeroHeader } from "./components/HeroHeader";
import { SystemHealthSidebar } from "./components/SystemHealthSidebar";
import { TechStackGrid } from "./components/TechStackGrid";
import InfrastructureProjects from "./components/InfrastructureProjects";
import { ExecutionHistory } from "./components/ExecutionHistory";
import { QuickLinks } from "./components/QuickLinks";
import {LanguagesKnown} from "./components/Languages";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] p-6 md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl">
        <QuickLinks />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main content area - 2 columns */}
          <div className="space-y-6 lg:col-span-2">
            <HeroHeader />

            <div id="stack">
              <TechStackGrid />
            </div>
              <div id="languages">
                  <LanguagesKnown />
              </div>

            <div id="projects">
              <InfrastructureProjects />
            </div>

            <ExecutionHistory />
          </div>

          {/* Sidebar - 1 column */}
          <div id="status" className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <SystemHealthSidebar />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 rounded border border-[#1E1E1E] bg-[#1E1E1E] p-6 text-center">
          <div className="mb-2 font-mono text-sm text-[#39FF14]">
            $ echo "Ready to collaborate"
          </div>
          <p className="font-mono text-xs text-[#E5E5E5]/70">
            Building robust backend systems · One API at a time
          </p><a
            href="https://www.instagram.com/damnnankur/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#E5E5E5]/70 cursor-pointer"
        >
            Know More...
        </a>
        </div>
      </div>
    </div>
  );
}
