import moment from "moment";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-8 lg:p-32 bg-secondary text-secondary-foreground flex justify-center flex-col lg:flex-row gap-3">
            <div className="w-full">
                <h1 className="text-2xl font-bold">Raahim Fareed</h1>
                <p>Breathing life into tech</p>
                <small>&copy; circa {moment().year().toString()}</small>
            </div>
            <div className="w-full flex gap-2 flex-col">
                <h2 className="text-lg">Socials</h2>
                <a href="https://github.com/raahimfareed" target="_blank" className="transition-opacity hover:opacity-70">Github</a>
                <a href="https://linked.com/in/raahimfareed" target="_blank" className="transition-opacity hover:opacity-70">LinkedIn</a>
                <a href="https://instagram.com/raahimwho" target="_blank" className="transition-opacity hover:opacity-70">Instagram</a>
                <a href="mailto:raahim@raahimfareed.com" className="transition-opacity hover:opacity-70">Email</a>
            </div>
            <div className="w-full flex gap-2 flex-col">
                <h2 className="text-lg">Sitemap</h2>
                <Link href="/" className="transition-opacity hover:opacity-70">Home</Link>
                <Link href="/about" className="transition-opacity hover:opacity-70">About Me</Link>
                <Link href="/projects" className="transition-opacity hover:opacity-70">My Projects</Link>
                <Link href="/contact" className="transition-opacity hover:opacity-70">Contact Me</Link>
                <Link href="/credits" className="transition-opacity hover:opacity-70">Credits</Link>
            </div>
            <div className="w-full flex gap-2 flex-col">
                <h2 className="text-lg">Other</h2>
                <a href="https://github.com/raahimfareed/pine" target="_blank" className="transition-opacity hover:opacity-70">Pine</a>
                <a href="https://www.linkedin.com/company/neo-flux/" target="_blank" className="transition-opacity hover:opacity-70">NeoFlux (Pvt.) Ltd.</a>
                <a href="https://github.com/raahimfareed/portfolio" target="_blank" className="transition-opacity hover:opacity-70">Source Code</a>
            </div>
        </footer>
    )
}

export default Footer
