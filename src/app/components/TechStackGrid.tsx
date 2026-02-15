import { motion } from "motion/react";
import { Database, Cloud } from "lucide-react";

interface ProgressBarProps {
  label: string;
  value: number;
}

interface TechMetric {
  label: string;
  value: number;
}

interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Database;
  metrics: TechMetric[];
}

const techCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend Stack",
    subtitle: "NodeJs / MySQL",
    icon: Database,
    metrics: [
      { label: "Node.js", value: 95 },
      { label: "RESTful API Design", value: 92 },
      { label: "Performance Tuning", value: 88 },
      { label: "Caching Strategies", value: 90 },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "CI/CD / Docker / K8s",
    icon: Cloud,
    metrics: [
      { label: "Deployment Automation", value: 93 },
      { label: "Container Orchestration", value: 87 },
      { label: "Infrastructure as Code", value: 85 },
      { label: "Monitoring & Logging", value: 91 },
    ],
  },
];

function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between font-mono text-xs text-[#E5E5E5]/70">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#050505]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full bg-[#39FF14]"
          style={{
            boxShadow: "0 0 10px rgba(57, 255, 20, 0.5)",
          }}
        />
      </div>
    </div>
  );
}

export function TechStackGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {techCategories.map((category) => {
        const Icon = category.icon;

        return (
          <div
            key={category.id}
            className="group relative rounded border border-[#1E1E1E] bg-[#1E1E1E] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <Icon className="h-6 w-6 text-[#39FF14]" />
              <h2 className="font-mono text-lg uppercase tracking-wider text-[#E5E5E5]">
                {category.title}
              </h2>
            </div>
            <div className="rounded border border-[#1E1E1E] bg-[#050505] p-4">
              <div className="mb-4 font-mono text-sm text-[#39FF14]">
                {category.subtitle}
              </div>
              {category.metrics.map((metric) => (
                <ProgressBar
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
