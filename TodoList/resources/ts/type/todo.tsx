
export type Todo = {
    id: number;
    title: string;
    detail: string;
    complete: string;
    todo_at: string;
}

export type formDataType = {
    title: string;
    detail: string;
    complete: number;
    [key: string]: string | number;
}


