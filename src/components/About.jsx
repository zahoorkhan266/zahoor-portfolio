import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import profileImg from "../assets/zahoor image.jpeg"
import { Award, FileCheck, CheckCircle2 } from "lucide-react"
import certFile from "../assets/iot certificate.pdf"
import instlyCert from "../assets/instly certificate.jpeg"

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tightest leading-[0.85] font-display"
                        >
                            The <br />
                            <span className="text-primary-600 dark:text-primary-400">Story</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl italic italic-none"
                        >
                            "I'm a full-stack architect dedicated to building high-performance
                            digital systems that bridge the gap between human needs and intelligent technology."
                        </motion.p>
                        
                        <div className="grid grid-cols-2 gap-12 py-12 border-y border-slate-100 dark:border-slate-900/50">
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-black text-5xl mb-2 tracking-tight">3.78</h4>
                                <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.3em]">ICU CGPA</p>
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-black text-5xl mb-2 tracking-tight">V3+</h4>
                                <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.3em]">Major Shipped</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            {[
                                { file: certFile, label: "IoT Specialist", sub: "Samsung Innovation" },
                                { file: instlyCert, label: "Software Engineer", sub: "Instly Technologies" }
                            ].map((cert, i) => (
                                <a
                                    key={i}
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-5 px-8 py-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:border-primary-500/30 transition-all shadow-sm hover:-translate-y-1 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                                        <Award size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[9px] text-slate-400 mb-0.5 font-bold uppercase tracking-widest">{cert.sub}</p>
                                        <span className="text-slate-900 dark:text-white text-xs">{cert.label}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[5rem] overflow-hidden border-[1px] border-slate-100 dark:border-slate-800 shadow-2xl p-4 bg-white dark:bg-slate-900">
                            <img
                                src={profileImg}
                                alt={resumeData.name}
                                className="w-full h-full object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.05] hover:scale-110"
                            />
                        </div>

                        {/* Geometric depth elements */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] opacity-50 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] opacity-50 animate-pulse delay-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
