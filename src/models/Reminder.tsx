export interface Reminder {
    id: number;
    title: string;
    date: Date;
    status: 'active' | 'done';
}
