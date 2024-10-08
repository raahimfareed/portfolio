interface iContactSidebarLinkProps {
    href: string;
    children: React.ReactNode;
}

const ContactSidebarLink = ({ href, children }: iContactSidebarLinkProps) => {
    return (
        <a href={href} target="_blank" className="text-foreground inline-flex items-center gap-2 p-1 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">{children}</a>
    )
}

export default ContactSidebarLink