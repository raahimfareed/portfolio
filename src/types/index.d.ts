export interface Theme {
    [key: string]: {
        [key: string]: string;
    }
}

export interface Project {
    id?: number;
    image?: string;
    name: string;
    description: string;
    url?: string;
    techStack?: string[];
}
