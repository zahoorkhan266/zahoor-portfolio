import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import profileImg from "../assets/zahoor image.jpeg"
import { Award, FileCheck, CheckCircle2 } from "lucide-react"
import certFile from "../assets/iot certificate.pdf"
import instlyCert from "../assets/instly certificate.jpeg"

export default function About() {
    return (
        <section id="about" className="py-32 md:py-48 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black mb-10 tracking-tightest leading-[0.9] font-display"
                        >
                            About <br />
                            <span className="text-primary-600 dark:text-primary-400">Me</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl"
                        >
                            I'm a full-stack developer dedicated to building high-performance
                            digital products that solve real problems.
                        </motion.p>
                        <div className="grid grid-cols-2 gap-12 py-10 border-y border-slate-50 dark:border-slate-900">
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-black text-4xl mb-2 tracking-tight">3.78</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ICU CGPA</p>
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-black text-4xl mb-2 tracking-tight">MERN</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Specialization</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            {[
                                { file: certFile, label: "IoT Certification", sub: "Samsung Innovation" },
                                { file: instlyCert, label: "Instly Certificate", sub: "Instly Team" }
                            ].map((cert, i) => (
                                <a
                                    key={i}
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-primary-500/50 transition-all shadow-sm hover:-translate-y-1 group"
                                >
                                    <Award className="text-primary-500 group-hover:scale-110 transition-transform" size={24} />
                                    <div className="text-left">
                                        <p className="text-[9px] text-slate-400 mb-0.5">{cert.sub}</p>
                                        <span className="text-slate-900 dark:text-white">{cert.label}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden border-[1px] border-slate-100 dark:border-slate-800 shadow-2xl">
                            <img
                                src={profileImg}
                                alt={resumeData.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.02]"
                            />
                        </div>

                        {/* Minimalist elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-[100px] opacity-50" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
