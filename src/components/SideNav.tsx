import Link from "next/link";
import { usePathname } from "next/navigation";

interface iSideNavProps {
  active: boolean;
}

const SideNav = ({ active }: iSideNavProps) => {
  const pathname = usePathname();
  console.log(pathname);
  let classes = "fixed top-0 right-0 transition px-16 h-full flex items-end flex-col justify-center z-30 gap-10 bg-secondary text-secondary-foreground lg:bg-transparent lg:text-foreground lg:!translate-x-0";
  if (active) {
    classes += " translate-x-0";
  } else {
    classes += " translate-x-full";
  }
  return (
    <nav className={classes}>
      <Link
        href="/"
        className={"transition-opacity hover:opacity-70" + (pathname === "/" ? " underline decoration-accent decoration-2" : "")}>
        Home
      </Link>
      <Link
        href="about"
        className={"transition-opacity hover:opacity-70" + (pathname === "/about" ? " underline decoration-accent decoration-2" : "")}>
        About
      </Link>
      <Link
        href="projects"
        className={"transition-opacity hover:opacity-70" + (pathname === "projects" ? " underline decoration-accent decoration-2" : "")}>
        Projects
      </Link>
      <Link
        href="contact"
        className={"transition-opacity hover:opacity-70" + (pathname === "contact" ? " underline decoration-accent decoration-2" : "")}>
        Contact
      </Link>
    </nav>
  )
}

export default SideNav
