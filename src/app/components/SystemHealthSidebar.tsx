import { motion } from "motion/react";
import { Activity, CheckCircle, Gauge } from "lucide-react";
import { useEffect, useState } from "react";

interface MetricCard {
  id: string;
  label: string;
  icon: typeof Activity;
  valueKey?: "uptime" | "latency";
  renderValue: (uptime: number, latency: number) => string;
  size?: "xl" | "lg";
}

const metricCards: MetricCard[] = [
  {
    id: "uptime",
    label: "Uptime",
    icon: Activity,
    valueKey: "uptime",
    renderValue: (uptime) => `${uptime.toFixed(2)}%`,
    size: "xl",
  },
  {
    id: "build-status",
    label: "Build Status",
    icon: CheckCircle,
    renderValue: () => "PASSING",
    size: "lg",
  },
  {
    id: "latency",
    label: "P99 Latency",
    icon: Gauge,
    valueKey: "latency",
    renderValue: (_uptime, latency) => `${Math.round(latency)}ms`,
    size: "xl",
  },
];

const systemHealth = {
  title: "System Health",
  status: "All Systems Operational",
};

export function SystemHealthSidebar() {
  const [uptime, setUptime] = useState(99.9);
  const [latency, setLatency] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(99.9 + Math.random() * 0.09);
      setLatency(195 + Math.random() * 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group relative rounded border border-[#1E1E1E] bg-[#1E1E1E] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-mono text-lg uppercase tracking-wider text-[#E5E5E5]">
          Metrics Panel
        </h2>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-[#39FF14]"
        />
      </div>

      <div className="space-y-6">
        {metricCards.map((card) => {
          const Icon = card.icon;
          const value = card.renderValue(uptime, latency);
          const valueClassName =
            card.size === "lg"
              ? "font-mono text-xl font-bold text-[#39FF14]"
              : "font-mono text-3xl font-bold text-[#39FF14]";
          const motionKey =
            card.valueKey === "uptime"
              ? uptime
              : card.valueKey === "latency"
                ? latency
                : card.id;

          return (
            <div
              key={card.id}
              className="rounded border border-[#1E1E1E] bg-[#050505] p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#39FF14]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#E5E5E5]/70">
                  {card.label}
                </span>
              </div>
              <motion.div
                key={motionKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={valueClassName}
              >
                {value}
              </motion.div>
            </div>
          );
        })}

        <div className="mt-6 rounded border border-[#39FF14]/30 bg-[#050505] p-4">
          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[#39FF14]">
            {systemHealth.title}
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-[#39FF14]"
            />
            <span className="font-mono text-sm text-[#E5E5E5]">
              {systemHealth.status}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
