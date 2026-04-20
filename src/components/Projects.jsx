import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tightest leading-[0.85] font-display"
                        >
                            Selected <br />
                            <span className="text-primary-600 dark:text-primary-400">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
                        >
                            A collection of production-ready applications built with focus
                            on scale, AI integration, and user experience.
                        </motion.p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        href={resumeData.socials.github}
                        target="_blank"
                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary-600 transition-colors group"
                    >
                        GitHub Archive <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
                >
                    {resumeData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col h-full group"
                        >
                            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary-500/10 group-hover:-translate-y-2">
                                {/* Project visual placeholder / background */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-blue-500/5 opacity-50 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-1000" />
                                
                                <div className="absolute inset-4 rounded-[1.8rem] border border-white/20 dark:border-white/5 pointer-events-none z-10" />
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md z-20">
                                    <div className="flex gap-5">
                                        {project.link && (
                                            <a href={project.link} target="_blank" className="w-14 h-14 bg-white dark:bg-slate-950 text-slate-950 dark:text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                                                <ExternalLink size={24} />
                                            </a>
                                        )}
                                        <a href="#" className="w-14 h-14 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black mb-4 group-hover:text-primary-600 transition-colors tracking-tight font-display uppercase italic italic-none">
                                    {project.title}
                                </h3>
                                {project.role && (
                                    <p className="text-[10px] font-black text-primary-500 mb-6 uppercase tracking-[0.3em]">
                                        // {project.role}
                                    </p>
                                )}
                                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-8 flex-grow font-medium">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-6 mt-auto">
                                    {project.link && (
                                        <a href={project.link} className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white hover:text-primary-600 transition-all group/link">
                                            Launch Alpha <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
