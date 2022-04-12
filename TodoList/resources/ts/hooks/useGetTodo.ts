import axios from "axios";
import { useCallback, useState } from "react";
import { Todo } from "../type/todo";

export const useGetTodo = () => {
    const [posts, setPosts] = useState<Array<Todo>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getTodo = useCallback(() => {
        setLoading(true);
        axios.get('/api/posts')
            .then((res) => {
                setPosts(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("通信に失敗しました");
                setLoading(false);
            })
    }, []);
    return { posts, getTodo, loading }
}
