import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import cvFile from "../assets/Zahoor's Resume.pdf"

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-28">
            {/* Sophisticated background depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-500/10 blur-[150px] rounded-full mix-blend-soft-light" />
                <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-soft-light" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-500/5 blur-[100px] rounded-full mix-blend-soft-light" />
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
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] uppercase bg-slate-50 dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800 rounded-full"
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
                        className="text-5xl md:text-8xl lg:text-[7.5rem] font-black tracking-tightest mb-8 bg-clip-text text-transparent bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-500 leading-[0.85] font-display"
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
                        className="flex flex-wrap justify-center gap-5 mt-4"
                    >
                        <a
                            href="#projects"
                            className="px-10 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold uppercase tracking-widest text-[11px] rounded-[1.25rem] shadow-2xl shadow-primary-500/10 hover:shadow-primary-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
                        >
                            Explore Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={cvFile}
                            download="Zahoor_Khan_Resume.pdf"
                            className="px-10 py-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 font-bold uppercase tracking-widest text-[11px] rounded-[1.25rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-3 shadow-sm hover:-translate-y-1"
                        >
                            Resume
                            <Download size={18} />
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
