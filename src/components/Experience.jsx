import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react"

export default function Experience() {
    return (
        <section id="experience" className="py-32 md:py-48 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-black mb-10 tracking-tightest leading-[0.85] font-display"
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
                    <div className="space-y-24">
                        {resumeData.experience.map((exp, idx) => (
                            <motion.div
                                key={exp.company + idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-12 border-l border-slate-100 dark:border-slate-800"
                            >
                                {/* Minimal dot */}
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-600" />

                                <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                                    <h3 className="text-4xl font-black tracking-tight">{exp.role}</h3>
                                    <span className="text-sm font-black text-primary-500 uppercase tracking-[0.2em]">
                                        {exp.company}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">
                                    <span className="flex items-center gap-2 tracking-[0.2em]">{exp.period}</span>
                                    <span className="flex items-center gap-2 text-slate-300 dark:text-slate-600 tracking-[0.2em]">{exp.location}</span>
                                </div>

                                <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-2xl">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}

                        <div className="pt-16">
                            <h3 className="text-[10px] font-black text-slate-300 dark:text-slate-700 mb-16 uppercase tracking-[0.4em]">
                                Education
                            </h3>
                            {resumeData.education.map((edu, idx) => (
                                <motion.div
                                    key={edu.school}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 p-10 rounded-[2.5rem] hover:ring-2 ring-primary-500/20 transition-all duration-500 shadow-sm hover:shadow-xl"
                                >
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-600" />
                                    <h4 className="text-3xl font-black mb-4 tracking-tight">{edu.degree}</h4>
                                    <p className="text-blue-600 font-black mb-6 uppercase tracking-widest text-[10px]">{edu.school}</p>
                                    <div className="flex flex-wrap gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        <span>{edu.period}</span>
                                        <span className="text-slate-900 dark:text-white underline underline-offset-8 decoration-slate-200 dark:decoration-slate-800">CGPA: {edu.cgpa}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
