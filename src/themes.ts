const themes: {
    [key: string]: { [key: string]: string; };
} = {
    "Andromeda": {
        "--background": "#23262E",
        "--foreground": "#D5CED9",
        "--primary": "#00e8c6",
        "--primary-foreground": "#23262E",
        "--secondary": "#3a404e",
        "--secondary-foreground": "#D5CED9",
        "--accent": "#C668BA",
        "--accent-foreground": "#23262E"
    },
    "Mono": {
        "--background": "#E9ECEF",
        "--foreground": "#212529",
        "--primary": "var(--foreground)",
        "--primary-foreground": "var(--background)",
        "--secondary": "#CED4D4",
        "--secondary-foreground": "#212529",
        "--accent": "#ADB5BD",
        "--accent-foreground": "var(--foreground)"
    },
    "VSCode Dark": {
        "--background": "#1E1E1E",
        "--foreground": "#D4D4D4",
        "--primary": "#0E639C",
        "--primary-foreground": "#FFFFFF",
        "--secondary": "#2D2D2D",
        "--secondary-foreground": "#D4D4D4",
        "--accent": "#569CD6",
        "--accent-foreground": "#FFFFFF",
    },
    "Gruvbox Dark": {
        "--background": "#282828",
        "--foreground": "#ebdbb2",
        "--primary": "#fb4934",
        "--primary-foreground": "#282828",
        "--secondary": "#3c3836",
        "--secondary-foreground": "#ebdbb2",
        "--accent": "#fabd2f",
        "--accent-foreground": "#282828",
    },
    "Gruvbox Light": {
        "--background": "#fbf1c7",
        "--foreground": "#3c3836",
        "--primary": "#cc241d",
        "--primary-foreground": "#fbf1c7",
        "--secondary": "#ebdbb2",
        "--secondary-foreground": "#3c3836",
        "--accent": "#d79921",
        "--accent-foreground": "#3c3836",
    },
    "Solarized Dark": {
        "--background": "#002b36",
        "--foreground": "#839496",
        "--primary": "#268bd2",
        "--primary-foreground": "#ffffff",
        "--secondary": "#073642",
        "--secondary-foreground": "#839496",
        "--accent": "#2aa198",
        "--accent-foreground": "#ffffff"
    },
    "Solarized Light": {
        "--background": "#fdf6e3",
        "--foreground": "#657b83",
        "--primary": "#268bd2",
        "--primary-foreground": "#ffffff",
        "--secondary": "#eee8d5",
        "--secondary-foreground": "#657b83",
        "--accent": "#2aa198",
        "--accent-foreground": "#ffffff"
    },
    "Monokai": {
        "--background": "#272822",
        "--foreground": "#f8f8f2",
        "--primary": "#f92672",
        "--primary-foreground": "#272822",
        "--secondary": "#75715e",
        "--secondary-foreground": "#f8f8f2",
        "--accent": "#66d9ef",
        "--accent-foreground": "#272822"
    },
};

export default themes;