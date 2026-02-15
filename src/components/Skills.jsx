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
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]"
                    >
                        Technical <br />
                        <span className="text-primary-600 dark:text-primary-400">Toolkit</span>
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
                            className="relative group p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 hover:border-primary-500/20 transition-all duration-500"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black mb-8 tracking-tight">{category.title}</h3>
                                <div className="flex flex-wrap gap-2.5">
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
