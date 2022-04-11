import { Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, useEffect, useState, VFC } from "react";
import axios from "axios";

import { UserCard } from "../organisms/user/UserCard";
import { Todo } from "../../type/todo";

export const TodoList: VFC = memo(() => {
    const [posts, setPosts] = useState<Array<Todo>>([]);

    useEffect(() => {
        getPostData();
    }, []);

    const getPostData = () => {
        axios.get('/api/posts')
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            })
            .finally(() => { });
    }

    return (
        <Wrap justify="center" p={{ base: 4, md: 10 }}>
            {console.log(posts)}
            {posts.map((post) => (
                <WrapItem key={post.id}>
                    <UserCard title={post.title} registrationDate={post.todo_at} detail={post.detail} complete={post.complete} />
                </WrapItem>
            ))}
        </Wrap >
    );
});
