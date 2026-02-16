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
        <section id="skills" className="py-32 md:py-48 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-black mb-10 tracking-tightest leading-[0.85] font-display"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-3xl hover:border-primary-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                                    {category.icon}
                                </div>
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-primary-500 transition-colors">
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-2.5 mt-4">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-white dark:bg-slate-800/50 text-slate-400 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
