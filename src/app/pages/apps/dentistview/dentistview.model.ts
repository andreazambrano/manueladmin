export interface Activity {
    time: string;
    title: string;
    text: string;
}

export interface Message {
    image?: string;
    font?: string;
    name: string;
    text: string;
}

export interface Tasks {
    name: string;
    user: string;
    time: string;
    task: string;
    message: number;
    status: string;
}

export interface List {
    type: string;
    status: string;
    title: string;
    color: string;
    text: string;
    images: string[];
    date: string;
    bars: number;
    comment: number;
    progress: number;
}
