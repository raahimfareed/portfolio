const ApplicationLogo = ({ className }: { className?: string }) => {
    let classes = "font-bold";
    if (className) {
        classes += " " + className;
    }
    return (
        <span className={classes}>Raahim Fareed</span>
    );
}


export default ApplicationLogo;
