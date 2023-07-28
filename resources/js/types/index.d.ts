export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Image {
    id: number;
    path: string;
    title: string | null;
    type: string;
    created_at: string;
    updated_at: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    media_id: number | null;
    media: Image;
    date: string;
    github_link: string | null;
    live_link: string | null;
}

export interface Experience {
    id: number;
    title: string;
    description: string;
    company: string;
    start: string;
    end: string;
    media_id: number | null;
    media: Image;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    media_id: number | null;
    media: Image;
    date: string;
    github_link: string | null;
    live_link: string | null;
}

export interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
