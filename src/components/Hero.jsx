import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { 
    ArrowRight, Github, Linkedin, Mail, Download, 
    Lightbulb, Sparkles, Cpu, Volume2, Layers, Code2 
} from "lucide-react"
import cvFile from "../assets/Zahoor's Resume.pdf"

const nodes = [
    { id: "ideas", x: 200, y: 60, label: "Ideas", icon: <Lightbulb size={20} className="text-amber-500 dark:text-amber-400" /> },
    { id: "openai", x: 320, y: 140, label: "OpenAI", icon: <Sparkles size={20} className="text-teal-500 dark:text-teal-400" /> },
    { id: "anthropic", x: 290, y: 290, label: "Anthropic", icon: <Cpu size={20} className="text-indigo-500 dark:text-indigo-400" /> },
    { id: "elevenlabs", x: 110, y: 290, label: "ElevenLabs", icon: <Volume2 size={20} className="text-pink-500 dark:text-pink-400" /> },
    { id: "web", x: 80, y: 140, label: "MERN Stack", icon: <Layers size={20} className="text-primary-500 dark:text-primary-400" /> }
]

function IntegrationCanvas() {
    return (
        <div className="relative w-full aspect-square max-w-[420px] bg-white/60 dark:bg-slate-900/30 backdrop-blur-xl rounded-[3rem] border border-slate-100 dark:border-slate-800/80 flex items-center justify-center p-6 shadow-2xl dark:shadow-primary-500/5 overflow-hidden">
            {/* Soft backdrop decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-indigo-500/5 to-pink-500/5 pointer-events-none" />
            
            <svg viewBox="0 0 400 400" className="w-full h-full z-10 overflow-visible">
                {/* Connecting Lines */}
                {nodes.map((node) => (
                    <g key={`connection-${node.id}`}>
                        {/* Static baseline path */}
                        <line
                            x1={node.x}
                            y1={node.y}
                            x2={200}
                            y2={200}
                            className="stroke-slate-200 dark:stroke-slate-800/80"
                            strokeWidth="1.5"
                        />
                        {/* Animated signal pulse flowing to the center */}
                        <motion.line
                            x1={node.x}
                            y1={node.y}
                            x2={200}
                            y2={200}
                            className="stroke-primary-500/40 dark:stroke-primary-400/30"
                            strokeWidth="2.5"
                            strokeDasharray="6, 12"
                            animate={{ strokeDashoffset: [0, -36] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 2.5 }}
                        />
                    </g>
                ))}

                {/* Center Core Node */}
                <motion.g
                    initial={{ scale: 0.95 }}
                    animate={{ scale: [0.96, 1.04, 0.96] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                    <circle cx="200" cy="200" r="34" className="fill-primary-500/10 dark:fill-primary-400/5 stroke-primary-500/30" strokeWidth="1" />
                    <circle cx="200" cy="200" r="28" className="fill-white dark:fill-slate-950 stroke-primary-500 dark:stroke-primary-400 shadow-xl" strokeWidth="2.5" />
                    <foreignObject x="186" y="186" width="28" height="28">
                        <div className="flex items-center justify-center w-full h-full text-primary-600 dark:text-primary-400">
                            <Code2 size={18} />
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Surrounding Nodes */}
                {nodes.map((node, i) => (
                    <motion.g
                        key={node.id}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, delay: i * 0.4, ease: "easeInOut" }}
                        className="group"
                    >
                        {/* Interactive glow ring */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r="23"
                            className="fill-white dark:fill-slate-950 stroke-slate-200 dark:stroke-slate-800/80 group-hover:stroke-primary-500 dark:group-hover:stroke-primary-400 transition-colors shadow-sm"
                            strokeWidth="1.5"
                        />
                        <foreignObject x={node.x - 12} y={node.y - 12} width="24" height="24">
                            <div className="flex items-center justify-center w-full h-full transition-transform duration-350 group-hover:scale-110">
                                {node.icon}
                            </div>
                        </foreignObject>
                        {/* Labels */}
                        <text
                            x={node.x}
                            y={node.y + 36}
                            textAnchor="middle"
                            className="text-[10px] font-bold uppercase tracking-wider fill-slate-400 dark:fill-slate-500 select-none group-hover:fill-slate-900 dark:group-hover:fill-slate-200 transition-colors font-sans"
                        >
                            {node.label}
                        </text>
                    </motion.g>
                ))}
            </svg>
        </div>
    )
}

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 grid-mesh">
            {/* Ambient visual background glow details */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-500/10 blur-[150px] rounded-full mix-blend-soft-light" />
                <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-soft-light" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-500/5 blur-[100px] rounded-full mix-blend-soft-light" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left text column */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="lg:col-span-7 text-left space-y-8"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-slate-50 dark:bg-slate-900/60 text-slate-400 border border-slate-100 dark:border-slate-800 rounded-full"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Converting Ideas Into Reality
                        </motion.div>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-500 leading-tight font-display"
                        >
                            Converting <br />
                            <span className="text-primary-600 dark:text-primary-400">Ideas</span> into <br />
                            Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">AI Systems</span>
                        </motion.h1>

                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, x: -15 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            className="text-xs md:text-sm text-primary-500 dark:text-primary-400 font-bold uppercase tracking-[0.15em] font-sans"
                        >
                            {resumeData.role}
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="max-w-xl text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
                        >
                            I build modern web applications, design professional <span className="text-slate-900 dark:text-white font-semibold">logos</span>, configure secure <span className="text-slate-900 dark:text-white font-semibold">AWS EC2 deployments</span>, and develop custom <span className="text-slate-900 dark:text-white font-semibold">AI chatbots & agents</span> integrated with systems like <span className="text-slate-900 dark:text-white font-semibold">OpenAI, Anthropic, and ElevenLabs</span>.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold uppercase tracking-widest text-[10px] rounded-[1rem] shadow-xl hover:shadow-primary-500/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group"
                            >
                                Explore Work
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={cvFile}
                                download="Zahoor_Khan_Resume.pdf"
                                className="px-8 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 font-bold uppercase tracking-widest text-[10px] rounded-[1rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-3 shadow-sm hover:-translate-y-0.5"
                            >
                                Resume
                                <Download size={16} />
                            </a>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            className="pt-8 flex gap-8 border-t border-slate-100 dark:border-slate-800/40 w-fit"
                        >
                            {[
                                { icon: <Github size={18} />, href: resumeData.socials.github },
                                { icon: <Linkedin size={18} />, href: resumeData.socials.linkedin },
                                { icon: <Mail size={18} />, href: `mailto:${resumeData.email}` }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-primary-650 dark:hover:text-white transition-all scale-100 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right interactive canvas column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                        className="lg:col-span-5 flex flex-col justify-start items-center gap-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                            className="w-full max-w-sm rounded-[2rem] border border-slate-200/60 dark:border-slate-800/70 bg-white/90 dark:bg-slate-950/85 shadow-2xl shadow-slate-900/5 dark:shadow-none p-6"
                        >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-600 dark:text-primary-400 mb-3">
                                Open to Work
                            </p>
                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white leading-tight">
                                Available for new AI, full-stack, and cloud deployment projects.
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Ready to help build modern web applications, intelligent chatbots, and secure AWS-hosted solutions. Connect now to get started.
                            </p>
                        </motion.div>
                        <IntegrationCanvas />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
