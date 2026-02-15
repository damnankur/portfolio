import { motion } from "motion/react";
import { Terminal } from "lucide-react";

interface QuickLinkItem {
  id: string;
  command: string;
  label: string;
  type: "scroll" | "external";
  href?: string;
}

const quickLinks: QuickLinkItem[] = [
  { id: "stack", command: "/stack", label: "Tech Stack", type: "scroll" },
  {
    id: "projects",
    command: "/projects",
    label: "Projects",
    type: "scroll",
  },
  { id: "status", command: "/status", label: "System Status", type: "scroll" },
  {
    id: "github",
    command: "/github",
    label: "GitHub",
    type: "external",
    href: "https://github.com/damnankur",
  },
  {
    id: "linkedin",
    command: "/linkedin",
    label: "LinkedIn",
    type: "external",
    href: "https://www.linkedin.com/in/ankur-singh-a12035287/",
  },
];

export function QuickLinks() {
  const handleScroll = (command: string) => {
    const element = document.getElementById(command.replace("/", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 rounded border border-[#1E1E1E] bg-[#1E1E1E] p-4"
    >
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-[#39FF14]" />
          <span className="font-mono text-sm text-[#E5E5E5]/70">
            Quick Links:
          </span>
        </div>
        {quickLinks.map((link) => {
          const commonClassName =
            "group relative font-mono text-sm text-[#39FF14] transition-all duration-300 hover:text-[#E5E5E5]";

          if (link.type === "external" && link.href) {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={commonClassName}
                aria-label={link.label}
              >
                <span className="relative">
                  {link.command}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#39FF14] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            );
          }

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => handleScroll(link.command)}
              className={commonClassName}
            >
              <span className="relative">
                {link.command}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#39FF14] transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
