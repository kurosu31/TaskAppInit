import axios from "axios";
import { useCallback, useState } from "react";
import { Todo } from "../type/todo";

export const useGetTodo = () => {
    const [todoData, setTodoData] = useState<Array<Todo>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getTodo = useCallback(() => {
        setLoading(true);
        axios.get<Array<Todo>>('/api/posts')
            .then((res) => {
                console.log('todoを表示');
                setTodoData(res.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("通信に失敗しました");
                setLoading(false);
            })
    }, []);
    return { todoData, getTodo, loading }
}
