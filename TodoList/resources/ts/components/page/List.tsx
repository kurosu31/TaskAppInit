import { Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useGetTodo } from "../../hooks/useGetTodo";

export const TodoList: VFC = memo(() => {
    const { posts, getTodo } = useGetTodo();
    useEffect(() => getTodo(), []);

    return (
        <Wrap justify="center" p={{ base: 4, md: 10 }}>
            {posts.map((post) => (
                <WrapItem key={post.id}>
                    <UserCard title={post.title} registrationDate={post.todo_at} detail={post.detail} complete={post.complete} />
                </WrapItem>
            ))}
        </Wrap >
    );
});
