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
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-10 tracking-tightest leading-[0.9] font-display"
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
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                            className="group p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-3xl hover:border-primary-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 shadow-sm text-lg">
                                    {category.icon}
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-primary-500 transition-colors">
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-2.5 mt-4">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50 text-slate-400 rounded-lg border border-slate-100 dark:border-slate-800 transition-colors group-hover:border-primary-500/20"
                                        >
                                            {skill}
                                        </span>
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
