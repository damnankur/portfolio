import { motion } from "motion/react";
import { Terminal, Zap, Shield } from "lucide-react";

export function HeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative rounded border border-[#1E1E1E] bg-[#1E1E1E] p-8 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
    >
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-3 w-3 items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#39FF14]"
            />
          </div>
          <span className="font-mono text-sm text-[#39FF14]">ONLINE</span>
        </div>
        <h1 className="mb-2 font-mono text-5xl font-bold text-[#E5E5E5]">
          Ankur Kumar Singh
        </h1>
        <p className="font-mono text-2xl text-[#39FF14]">
          Architecting Scalable Backend Systems
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group/card relative rounded border border-[#1E1E1E] bg-[#050505] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]"
        >
          <Terminal className="mb-3 h-6 w-6 text-[#39FF14]" />
          <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-[#E5E5E5]">
            Focus
          </h3>
          <p className="font-mono text-xs text-[#E5E5E5]/70">
            API Platforms & Distributed Systems
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group/card relative rounded border border-[#1E1E1E] bg-[#050505] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]"
        >
          <Zap className="mb-3 h-6 w-6 text-[#39FF14]" />
          <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-[#E5E5E5]">
            Operating Model
          </h3>
          <p className="font-mono text-xs text-[#E5E5E5]/70">
            SLO-Driven Performance Engineering
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group/card relative rounded border border-[#1E1E1E] bg-[#050505] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]"
        >
          <Shield className="mb-3 h-6 w-6 text-[#39FF14]" />
          <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-[#E5E5E5]">
            Signature
          </h3>
          <p className="font-mono text-xs text-[#E5E5E5]/70">
            Clean Interfaces, Robust Implementations
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
