import { motion } from "framer-motion"
import { resumeData } from "../data/resume"
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react"

export default function Contact() {
    const contactInfo = [
        {
            label: "Email Me",
            value: resumeData.email,
            icon: <Mail size={24} />,
            href: `mailto:${resumeData.email}`,
            color: "text-primary-600 dark:text-primary-400"
        },
        {
            label: "Call Me",
            value: resumeData.phone,
            icon: <Phone size={24} />,
            href: `tel:${resumeData.phone}`,
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            label: "Location",
            value: resumeData.location,
            icon: <MapPin size={24} />,
            href: null,
            color: "text-slate-600 dark:text-slate-400"
        },
    ]

    return (
        <section id="contact" className="py-20 md:py-32 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tightest leading-[0.85] font-display"
                        >
                            Let's <br />
                            <span className="text-primary-600 dark:text-primary-400">Connect</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 font-medium leading-relaxed"
                        >
                            I'm available for full-time roles and high-impact freelance projects.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {info.href ? (
                                        <a href={info.href} className="flex flex-col justify-between p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border-transparent hover:border-primary-500/20 h-full min-h-[140px]">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex-shrink-0 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                                    {info.icon}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{info.label}</p>
                                                    <p className="text-xs md:text-sm font-black text-slate-900 dark:text-white break-all tracking-tight leading-tight">{info.value}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end mt-2">
                                                <ArrowUpRight className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-500" size={16} />
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-100 dark:border-slate-800/50 rounded-2xl shadow-sm h-full min-h-[140px]">
                                            <div className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex-shrink-0 flex items-center justify-center ${info.color}`}>
                                                {info.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{info.label}</p>
                                                <p className="text-xs md:text-sm font-black text-slate-900 dark:text-white break-all tracking-tight leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl dark:shadow-primary-500/5"
                    >
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const name = formData.get('name');
                                const email = formData.get('email');
                                const message = formData.get('message');
                                window.location.href = `mailto:${resumeData.email}?subject=Project inquiry from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Identity</label>
                                    <input name="name" required type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-bold placeholder:text-slate-300 dark:placeholder:text-slate-700 text-sm" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email</label>
                                    <input name="email" required type="email" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-bold placeholder:text-slate-300 dark:placeholder:text-slate-700 text-sm" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Communication</label>
                                <textarea name="message" required rows="4" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all resize-none font-bold placeholder:text-slate-300 dark:placeholder:text-slate-700 text-sm" placeholder="How can I help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full py-5 bg-slate-950 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] shadow-xl">
                                Transmit Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
