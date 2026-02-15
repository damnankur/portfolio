import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Server, GitBranch, Network, Database } from "lucide-react";

interface ProjectSectionItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Database;
}

interface ProjectSection {
  id: "overview" | "uml" | "sequence" | "integration";
  label: string;
  type: "overview" | "diagram";
  heading?: string;
  diagramLines?: string[];
  items?: ProjectSectionItem[];
}

interface InfrastructureProject {
  id: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  liveUrl: string;
  sections: ProjectSection[];
}

const infrastructureProjects: InfrastructureProject[] = [
  {
    id: "video-library",
    title: "Video Library Management System",
    subtitle: "Scalable microservices architecture for video content delivery",
    githubUrl: "",
    liveUrl: "",
    sections: [
      {
        id: "overview",
        label: "Overview",
        type: "overview",
        items: [
          {
            id: "database-arch",
            title: "Database Architecture",
            description:
              "Sharded MySQL clusters with read replicas for optimal query performance",
            icon: Database,
          },
          {
            id: "api-gateway",
            title: "API Gateway",
            description:
              "RESTful endpoints with rate limiting and authentication middleware",
            icon: Network,
          },
          {
            id: "deployment-pipeline",
            title: "Deployment Pipeline",
            description:
              "GitOps-based CI/CD with blue-green deployment strategy",
            icon: GitBranch,
          },
        ],
      }
    ],
  },
  {
    id: "payments-core",
    title: "Payments Core Platform",
    subtitle: "Multi-region transaction processing with strong consistency",
    githubUrl: "",
    liveUrl: "",
    sections: [
      {
        id: "overview",
        label: "Overview",
        type: "overview",
        items: [
          {
            id: "ledger",
            title: "Ledger Service",
            description:
              "Event-sourced ledger with immutable audit trails and idempotent writes",
            icon: Database,
          },
          {
            id: "fraud",
            title: "Fraud Scoring",
            description:
              "Streaming rules engine with adaptive thresholds and feature flags",
            icon: Network,
          },
          {
            id: "deployments",
            title: "Release Automation",
            description:
              "Canary rollouts with automated rollback and SLO monitoring",
            icon: GitBranch,
          },
        ],
      },

    ],
  },
  {
    id: "iot-telemetry",
    title: "IoT Telemetry Hub",
    subtitle: "High-throughput ingestion and analytics for device fleets",
    githubUrl: "",
    liveUrl: "",
    sections: [
      {
        id: "overview",
        label: "Overview",
        type: "overview",
        items: [
          {
            id: "ingestion",
            title: "Ingestion Pipeline",
            description:
              "MQTT gateways with burst buffering and regional failover",
            icon: Network,
          },
          {
            id: "storage",
            title: "Time-Series Storage",
            description:
              "Tiered retention with hot/warm/cold storage policies",
            icon: Database,
          },
          {
            id: "deploy",
            title: "Edge Deployments",
            description:
              "Fleet rollouts with staged device cohorts and health checks",
            icon: GitBranch,
          },
        ],
      },
    ],
  },
];

function InfrastructureProjects() {
  const [activeProjectId, setActiveProjectId] = useState(
    infrastructureProjects[0]?.id ?? ""
  );
  const [activeTab, setActiveTab] = useState<ProjectSection["id"]>(
    "overview"
  );

  const activeProject = useMemo(() => {
    return (
       infrastructureProjects.find((project) => project.id === activeProjectId) ??
      infrastructureProjects[0]
    );
  }, [activeProjectId]);

  const activeSection = useMemo(() => {
    return activeProject.sections.find((section) => section.id === activeTab);
  }, [activeProject, activeTab]);

  const handleProjectChange = (projectId: string) => {
    setActiveProjectId(projectId);
    setActiveTab("overview");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="group relative rounded border border-[#1E1E1E] bg-[#1E1E1E] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
    >
      <div className="mb-6 flex items-center gap-3">
        <Server className="h-6 w-6 text-[#39FF14]" />
        <h2 className="font-mono text-lg uppercase tracking-wider text-[#E5E5E5]">
          Infrastructure Projects
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 border-b border-[#1E1E1E] pb-4">
        {infrastructureProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => handleProjectChange(project.id)}
            className={`rounded px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:border-[#39FF14]/70 hover:text-[#E5E5E5] hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] ${
              activeProjectId === project.id
                ? "border border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.3)]"
                : "border border-[#1E1E1E] bg-[#050505] text-[#E5E5E5]/70"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="font-mono text-lg text-[#39FF14]">
            {activeProject.title}
          </h3>
          <p className="font-mono text-xs text-[#E5E5E5]/70">
            {activeProject.subtitle}
          </p>
        </div>
        <div className="flex gap-4">
          <span className="font-mono text-xs text-[#39FF14]">GitHub</span>
          <span className="font-mono text-xs text-[#39FF14]">Live</span>
        </div>
      </div>

      <div className="mb-6 rounded border border-[#1E1E1E] bg-[#050505] p-6">
        {activeSection?.type === "overview" && activeSection.items && (
          <div className="space-y-4">
            {activeSection.items.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="flex items-start gap-3">
                  <Icon className="mt-1 h-5 w-5 text-[#39FF14]" />
                  <div>
                    <h4 className="mb-1 font-mono text-sm text-[#E5E5E5]">
                      {item.title}
                    </h4>
                    <p className="font-mono text-xs text-[#E5E5E5]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeSection?.type === "diagram" && (
          <div className="flex h-64 items-center justify-center rounded border border-[#39FF14]/30 bg-[#050505]">
            <div className="text-center">
              <div className="mb-4 font-mono text-sm text-[#39FF14]">
                {activeSection.heading}
              </div>
              <div className="space-y-2 font-mono text-xs text-[#E5E5E5]/70">
                {activeSection.diagramLines?.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default InfrastructureProjects
