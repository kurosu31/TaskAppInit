import axios from "axios";
import React, { useCallback, useState } from "react";
import { Todo } from "../type/todo";

export const useGetTodo = () => {
    const [posts, setPosts] = useState<Array<Todo>>([]);
    const getTodo = useCallback(() => {
        axios.get('/api/posts')
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            })
            .finally(() => { });
    }, []);
    return { posts, getTodo }
}
