import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react"

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
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tightest leading-[0.85] font-display"
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
                                        <div className="flex items-center gap-3 text-[10px] font-black text-primary-500 uppercase tracking-[0.3em]">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none group-hover:text-primary-500 transition-colors">
                                            {exp.company}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </div>
                                    </div>
                                    <div className="relative pl-0 md:pl-12 md:border-l border-slate-100 dark:border-slate-800/50">
                                        <h4 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">{exp.role}</h4>
                                        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="pt-16 border-t border-slate-100 dark:border-slate-900">
                            <div className="inline-flex items-center gap-4 px-6 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">
                                <GraduationCap size={16} className="text-primary-500" />
                                Education
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resumeData.education.map((edu, idx) => (
                                    <motion.div
                                        key={edu.school}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="relative group bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800/50 p-10 rounded-[3rem] hover:border-primary-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <p className="text-primary-600 font-black uppercase tracking-widest text-[10px] mb-2">{edu.school}</p>
                                                <h4 className="text-2xl font-black tracking-tight">{edu.degree}</h4>
                                            </div>
                                            <div className="bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-2xl text-[10px] font-black text-primary-600">
                                                {edu.cgpa} CGPA
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                            <Calendar size={14} />
                                            {edu.period}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
