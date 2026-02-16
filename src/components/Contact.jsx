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
        <section id="contact" className="py-24 md:py-40 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black mb-10 tracking-tightest leading-[0.85] font-display"
                        >
                            Let's <br />
                            <span className="text-primary-600 dark:text-primary-400">Connect</span>
                        </motion.h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            I'm available for full-time roles and high-impact freelance projects.
                            Let's discuss how my expertise can help your vision come to life.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {info.href ? (
                                        <a href={info.href} className="block p-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
                                            <div className="flex items-center gap-6 mb-8">
                                                <div className={`w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}>
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{info.label}</p>
                                                    <p className="text-lg font-bold text-slate-900 dark:text-white truncate">{info.value}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <ArrowUpRight className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="p-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-[2.5rem] shadow-sm">
                                            <div className="flex items-center gap-6 mb-8">
                                                <div className={`w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center ${info.color}`}>
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{info.label}</p>
                                                    <p className="text-lg font-bold text-slate-900 dark:text-white truncate">{info.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 dark:bg-slate-900/50 p-10 md:p-14 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-primary-500/5"
                    >
                        <form
                            className="space-y-8"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const name = formData.get('name');
                                const email = formData.get('email');
                                const message = formData.get('message');
                                window.location.href = `mailto:${resumeData.email}?subject=Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                    <input name="name" required type="text" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all font-medium" placeholder="John Doe" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                    <input name="email" required type="email" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all font-medium" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                <textarea name="message" required rows="4" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all resize-none font-medium" placeholder="Briefly describe your project or opportunity..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-5 bg-primary-600 hover:bg-primary-700 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary-500/20 transition-all hover:scale-[1.02] active:scale-95">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
