import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Bot, Palette, Code2, Cloud, ArrowUpRight } from "lucide-react"

const iconMap = {
    Bot: <Bot size={32} className="text-indigo-500 dark:text-indigo-400" />,
    Palette: <Palette size={32} className="text-pink-500 dark:text-pink-400" />,
    Code2: <Code2 size={32} className="text-primary-500 dark:text-primary-400" />,
    Cloud: <Cloud size={32} className="text-sky-500 dark:text-sky-400" />
}

// Border glows to match the design system
const glowColors = {
    Bot: "group-hover:shadow-indigo-500/10 dark:group-hover:shadow-indigo-500/5",
    Palette: "group-hover:shadow-pink-500/10 dark:group-hover:shadow-pink-500/5",
    Code2: "group-hover:shadow-primary-500/10 dark:group-hover:shadow-primary-500/5",
    Cloud: "group-hover:shadow-sky-500/10 dark:group-hover:shadow-sky-500/5"
}

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10 grid-mesh">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/2 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/5 dark:bg-pink-500/2 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight font-display"
                        >
                            Core <br />
                            <span className="text-primary-600 dark:text-primary-400">Services</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
                        >
                            Professional, simple, and custom solutions engineered to address your unique goals.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {resumeData.services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative flex flex-col h-full p-10 md:p-12 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/40 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl gradient-glow-card ${glowColors[service.icon] || ""}`}
                        >
                            {/* Card glow overlay */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon container with double ring effect */}
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 shadow-md group-hover:shadow-lg">
                                    {iconMap[service.icon]}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-tight font-display">
                                    {service.title}
                                </h3>

                                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="pt-4 mt-auto">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-all group-hover:translate-x-1"
                                    >
                                        Inquire Service <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
