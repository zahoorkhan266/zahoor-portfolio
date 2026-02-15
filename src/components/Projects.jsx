import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export default function Projects() {
    return (
        <section id="projects" className="py-32 md:py-48 bg-slate-50/50 dark:bg-slate-900/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {resumeData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.7 }}
                            className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[3rem] overflow-hidden hover:border-primary-500/20 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-2xl"
                        >
                            {/* Visual Header */}
                            <div className="aspect-[16/9] bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                                    <div className="flex gap-4">
                                        {project.link && (
                                            <a href={project.link} target="_blank" className="p-5 bg-white dark:bg-slate-950 text-slate-950 dark:text-white rounded-2xl hover:scale-110 transition-transform shadow-xl border border-slate-100 dark:border-slate-800">
                                                <ExternalLink size={24} />
                                            </a>
                                        )}
                                        <a href="#" className="p-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl hover:scale-110 transition-transform shadow-xl">
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black mb-4 group-hover:text-primary-600 transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                {project.role && (
                                    <p className="text-[10px] font-black text-primary-500 mb-6 uppercase tracking-[0.2em]">
                                        {project.role}
                                    </p>
                                )}
                                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-8 flex-grow font-medium">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-6 mt-auto">
                                    {project.link && (
                                        <a href={project.link} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary-600 transition-all translate-x-0 hover:translate-x-1">
                                            View Demo <ArrowUpRight size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
