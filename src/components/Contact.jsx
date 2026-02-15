import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-40 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                            Let's Build <br />
                            <span className="text-primary-600 dark:text-primary-400">Something Great</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            I'm available for full-time roles and high-impact freelance projects.
                            Let's discuss how my expertise can help your vision come to life.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${resumeData.email}`} className="flex items-center gap-6 group p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-500 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-primary-600 shadow-sm group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email Me</p>
                                    <p className="text-lg font-bold">{resumeData.email}</p>
                                </div>
                                <ArrowUpRight className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                            </a>

                            <a href={`tel:${resumeData.phone}`} className="flex items-center gap-6 group p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-500 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Call Me</p>
                                    <p className="text-lg font-bold">{resumeData.phone}</p>
                                </div>
                                <ArrowUpRight className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                            </a>

                            <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Location</p>
                                    <p className="text-lg font-bold">{resumeData.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 dark:bg-slate-900/50 p-10 md:p-14 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-primary-500/5"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all font-medium" placeholder="John Doe" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all font-medium" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all resize-none font-medium" placeholder="Briefly describe your project or opportunity..."></textarea>
                            </div>
                            <button className="w-full py-5 bg-primary-600 hover:bg-primary-700 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary-500/20 transition-all hover:scale-[1.02] active:scale-95">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
