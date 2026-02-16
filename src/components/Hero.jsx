import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import cvFile from "../assets/Zahoor's Resume.pdf"

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40">
            {/* Soft, organic background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-primary-500/5 blur-[120px] rounded-full mix-blend-soft-light" />
                <div className="absolute bottom-[-5%] right-[-10%] w-[70%] h-[70%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-soft-light" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="text-center"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[10px] font-black tracking-[0.2em] uppercase bg-slate-50 dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800 rounded-full"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Open to new projects
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1 }
                        }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tightest mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-950 to-slate-700 dark:from-white dark:to-slate-500 leading-[0.9] font-display"
                    >
                        {resumeData.name}
                    </motion.h1>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-bold mb-12 uppercase tracking-[0.3em]"
                    >
                        {resumeData.role}
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="max-w-lg mx-auto text-base md:text-lg text-slate-500 dark:text-slate-400 mb-16 leading-relaxed font-medium"
                    >
                        I build high-performance web applications with a focus on
                        <span className="text-slate-900 dark:text-white mx-1 font-semibold">clean code</span>
                        and <span className="text-slate-900 dark:text-white mx-1 font-semibold">intelligent AI integrations</span>.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold uppercase tracking-widest text-[10px] rounded-2xl shadow-xl hover:shadow-primary-500/20 hover:scale-105 transition-all flex items-center gap-3 group"
                        >
                            View Projects
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={cvFile}
                            download="Zahoor_Khan_Resume.pdf"
                            className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold uppercase tracking-widest text-[10px] rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3 shadow-sm hover:scale-105"
                        >
                            Resume
                            <Download size={16} />
                        </a>
                    </motion.div>

                    {/* Minimal social links */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                        className="mt-24 flex justify-center gap-10"
                    >
                        {[
                            { icon: <Github size={20} />, href: resumeData.socials.github },
                            { icon: <Linkedin size={20} />, href: resumeData.socials.linkedin },
                            { icon: <Mail size={20} />, href: `mailto:${resumeData.email}` }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-300 hover:text-primary-600 dark:hover:text-white transition-all scale-100 hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
