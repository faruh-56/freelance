interface Job {
    id: string;
    name: string;
    company: { name: string };
    locations: { name: string }[];
    levels: { name: string }[];
}

export interface JobsResponse {
    results: Job[];
    page: number;
    total: number;
}