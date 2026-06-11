import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
    return (
        <section id="experience" className="py-20 md:py-32 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight font-display"
                    >
                        Work <br />
                        <span className="text-primary-600 dark:text-primary-400">History</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 dark:text-slate-400 max-w-xl font-medium"
                    >
                        Experience and academic history in Computer Science.
                    </motion.p>
                </div>

                <div className="max-w-5xl">
                    <div className="space-y-16">
                        {resumeData.experience.map((exp, idx) => (
                            <motion.div
                                key={exp.company + idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[10px] font-semibold text-primary-500 uppercase tracking-wider">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-primary-500 transition-colors">
                                            {exp.company}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </div>
                                    </div>
                                    <div className="relative pl-0 md:pl-12 md:border-l border-slate-100 dark:border-slate-800/50">
                                        <h4 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">{exp.role}</h4>
                                        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
