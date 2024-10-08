interface iProjectSideBarLinkProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

const ProjectSidebarLink = ({
    children,
    active = false,
    onClick,
}: iProjectSideBarLinkProps) => {
    let classes = "rounded-lg py-1 px-2 border-2 hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer";
    if (active) {
        classes += " border-secondary";
    } else {
        classes += " border-transparent"
    }
    return (
        <span tabIndex={0} onClick={onClick} className={classes}>{children}</span>
    )
}

export default ProjectSidebarLink
