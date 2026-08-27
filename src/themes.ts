// Kept in the same "R G B" channel format as globals.css. These feed the
// swatch dots in the theme switcher, so they get wrapped in rgb() at use.
const themes: {
    [key: string]: { [key: string]: string; };
} = {
    "Andromeda": {
        "--background": "35 38 46",
        "--foreground": "213 206 217",
        "--primary": "0 232 198",
        "--primary-foreground": "35 38 46",
        "--secondary": "58 64 78",
        "--secondary-foreground": "213 206 217",
        "--accent": "198 104 186",
        "--accent-foreground": "35 38 46"
    },
    "Mono": {
        "--background": "233 236 239",
        "--foreground": "33 37 41",
        "--primary": "33 37 41",
        "--primary-foreground": "233 236 239",
        "--secondary": "206 212 212",
        "--secondary-foreground": "33 37 41",
        "--accent": "173 181 189",
        "--accent-foreground": "33 37 41"
    },
    "Dark Mono": {
        "--background": "33 37 41",
        "--foreground": "233 236 239",
        "--primary": "233 236 239",
        "--primary-foreground": "33 37 41",
        "--secondary": "52 58 64",
        "--secondary-foreground": "233 236 239",
        "--accent": "108 117 125",
        "--accent-foreground": "255 255 255"
    },
    "VSCode Dark": {
        "--background": "30 30 30",
        "--foreground": "212 212 212",
        "--primary": "14 99 156",
        "--primary-foreground": "255 255 255",
        "--secondary": "45 45 45",
        "--secondary-foreground": "212 212 212",
        "--accent": "86 156 214",
        "--accent-foreground": "255 255 255",
    },
    "Gruvbox Dark": {
        "--background": "40 40 40",
        "--foreground": "235 219 178",
        "--primary": "251 73 52",
        "--primary-foreground": "40 40 40",
        "--secondary": "60 56 54",
        "--secondary-foreground": "235 219 178",
        "--accent": "250 189 47",
        "--accent-foreground": "40 40 40",
    },
    "Gruvbox Light": {
        "--background": "251 241 199",
        "--foreground": "60 56 54",
        "--primary": "204 36 29",
        "--primary-foreground": "251 241 199",
        "--secondary": "235 219 178",
        "--secondary-foreground": "60 56 54",
        "--accent": "215 153 33",
        "--accent-foreground": "60 56 54",
    },
    "Solarized Dark": {
        "--background": "0 43 54",
        "--foreground": "131 148 150",
        "--primary": "38 139 210",
        "--primary-foreground": "255 255 255",
        "--secondary": "7 54 66",
        "--secondary-foreground": "131 148 150",
        "--accent": "42 161 152",
        "--accent-foreground": "255 255 255"
    },
    "Solarized Light": {
        "--background": "253 246 227",
        "--foreground": "101 123 131",
        "--primary": "38 139 210",
        "--primary-foreground": "255 255 255",
        "--secondary": "238 232 213",
        "--secondary-foreground": "101 123 131",
        "--accent": "42 161 152",
        "--accent-foreground": "255 255 255"
    },
    "Monokai": {
        "--background": "39 40 34",
        "--foreground": "248 248 242",
        "--primary": "249 38 114",
        "--primary-foreground": "39 40 34",
        "--secondary": "117 113 94",
        "--secondary-foreground": "248 248 242",
        "--accent": "102 217 239",
        "--accent-foreground": "39 40 34"
    },
};

export default themes;
