import { motion } from "motion/react";
import { Award,Users} from "lucide-react";

interface ExecutionDetail {
  id: string;
  text: string;
}

interface ExecutionTag {
  id: string;
  label: string;
}

interface ExecutionCard {
  id: string;
  title: string;
  role: string;
  icon: typeof Users;
  details: ExecutionDetail[];
  tags: ExecutionTag[];
}
const executionCards: ExecutionCard[] = [
    {
        id: "ecell-dtu",
        title: "E-Cell DTU",
        role: "Co-Head, Corporate Relations",
        icon: Users,
        details: [
            {
                id: "partnerships",
                text: "Led corporate outreach and closed strategic partnerships for flagship initiatives",
            },
            {
                id: "stakeholder",
                text: "Managed sponsor relationships and aligned deliverables across marketing, tech and events teams",
            },
            {
                id: "revenue",
                text: "Contributed to revenue pipeline through brand collaborations and activation deals",
            },
        ],
        tags: [
            { id: "negotiation", label: "Negotiation" },
            { id: "stakeholder-mgmt", label: "Stakeholder Management" },
            { id: "partnerships", label: "Partnerships" },
        ],
    },
    {
        id: "engifest",
        title: "Engifest DTU",
        role: "Organising Team",
        icon: Award,
        details: [
            {
                id: "operations",
                text: "Executed large-scale festival operations across cross-functional teams",
            },
            {
                id: "vendor",
                text: "Coordinated with external vendors and internal departments under strict timelines",
            },
            {
                id: "pressure",
                text: "Delivered seamless on-ground execution in high-pressure environments",
            },
        ],
        tags: [
            { id: "operations", label: "Operations" },
            { id: "team-lead", label: "Team Leadership" },
            { id: "execution", label: "Execution" },
        ],
    },
];

export function ExecutionHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {executionCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            className="group relative rounded border border-[#1E1E1E] bg-[#1E1E1E] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <Icon className="h-6 w-6 text-[#39FF14]" />
              <h3 className="font-mono text-lg uppercase tracking-wider text-[#E5E5E5]">
                {card.title}
              </h3>
            </div>
            <div className="rounded border border-[#1E1E1E] bg-[#050505] p-4">
              <div className="mb-3 font-mono text-sm text-[#39FF14]">
                {card.role}
              </div>
              <div className="space-y-2 font-mono text-xs text-[#E5E5E5]/70">
                {card.details.map((detail) => (
                  <div key={detail.id} className="flex items-start gap-2">
                    <span className="text-[#39FF14]">→</span>
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded border border-[#39FF14]/30 bg-[#39FF14]/10 px-2 py-1 font-mono text-xs text-[#39FF14]"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
