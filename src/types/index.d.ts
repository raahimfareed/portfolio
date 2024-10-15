export interface Theme {
    [key: string]: {
        [key: string]: string;
    }
}

export interface Project {
    name: string;
    description: string;
    url?: string;
    techStack?: string[];
}
