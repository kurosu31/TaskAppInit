import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/todo/TodoCard";
import { useGetTodo } from "../../hooks/useGetTodo";
import { TodoDetailModal } from "../organisms/todo/TodoDetailModal";

export const TodoList: VFC = memo(() => {
    const { posts, getTodo, loading } = useGetTodo();
    const { onOpen, onClose, isOpen } = useDisclosure();

    useEffect(() => getTodo(), []);

    const onOpenModal = () => onOpen();

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>) : (
                <Wrap justify="center" p={{ base: 4, md: 10 }}>
                    {posts.map((post) => (
                        <WrapItem key={post.id}>
                            <UserCard onClick={onOpenModal} title={post.title} registrationDate={post.todo_at} detail={post.detail} complete={post.complete} />
                        </WrapItem>
                    ))}
                </Wrap >
            )}
            <TodoDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    );
});
