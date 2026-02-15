import { motion } from "motion/react";
import { Code } from "lucide-react";


interface LanguageTag {
    id: string;
    label: string;
}

interface LanguageCard {
    id: string;
    title: string;
    icon: typeof Code;
    tags: LanguageTag[];
}


const languageCards: LanguageCard[] = [
    {
        id: "languages-knows",
        title: "Experienced with",
        icon: Code,
        tags: [
            { id: "cpp", label: "C++" },
            { id: "mysql", label: "MySQL" },
            { id: "redis", label: "Redis" },
            { id: "typescript", label: "TypeScript" },
            { id: "javascript", label: "JavaScript" },
            { id: "html", label: "HTML" },
            { id: "css", label: "CSS" },
            {id:"docker", label: "Docker" },
            {id: "linux", label: "Linux" },
            {id: "aws", label: "AWS" },
            {id: "python", label: "Python" },
            {id: "jupyter", label: "Jupyter" },
            {id: "uml", label: "UML" },
            {id: "git", label: "GitHub" },



        ]

    }
    ]



export function LanguagesKnown() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative rounded border border-[#1E1E1E] bg-[#1E1E1E] p-6 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
        >
            {languageCards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.id}
                        className="group relative rounded border-[#1E1E1E] ]"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <Icon className="h-6 w-6 text-[#39FF14]" />
                            <h3 className="font-mono text-lg uppercase tracking-wider text-[#E5E5E5]">
                                {card.title}
                            </h3>
                        </div>
                        <div className="rounded border border-[#1E1E1E] bg-[#050505] p-4">

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
