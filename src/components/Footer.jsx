import { resumeData } from "../data/resume"

export default function Footer() {
    return (
        <footer className="py-16 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <span className="font-black text-2xl tracking-tighter">ZK</span>
                        <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-800" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            © {new Date().getFullYear()} {resumeData.name}. Crafted with obsession.
                        </p>
                    </div>

                    <div className="flex gap-10">
                        {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary-600 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
