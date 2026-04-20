import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Code2, Layout, Database, Wrench } from "lucide-react"

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="text-blue-500" />,
        items: resumeData.skills.languages,
    },
    {
        title: "Core Stack",
        icon: <Layout className="text-primary-500" />,
        items: resumeData.skills.frameworks,
    },
    {
        title: "Data Stores",
        icon: <Database className="text-green-500" />,
        items: resumeData.skills.databases,
    },
    {
        title: "Platform",
        icon: <Wrench className="text-orange-500" />,
        items: resumeData.skills.tools,
    }
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tightest leading-[0.85] font-display"
                    >
                        Tool <br />
                        <span className="text-primary-600 dark:text-primary-400">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 dark:text-slate-400 max-w-xl font-medium"
                    >
                        Expertise in the MERN ecosystem and modern developer workflows.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group p-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800/50 rounded-[3rem] hover:border-primary-500/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-primary-500/10">
                                    {category.icon}
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-primary-500 transition-colors mb-6">
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-2.5">
                                    {category.items.map((skill) => (
                                        <div
                                            key={skill}
                                            className="px-4 py-2 text-[9px] font-black uppercase tracking-widest bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors group-hover:border-primary-500/20 group-hover:text-slate-900 dark:group-hover:text-white"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
