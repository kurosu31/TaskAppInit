import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, useCallback, useEffect, VFC } from "react";

import { TodoCard } from "../organisms/todo/TodoCard";
import { useGetTodo } from "../../hooks/useGetTodo";
import { TodoDetailModal } from "../organisms/todo/TodoDetailModal";
import { useSelectedTodo } from "../../hooks/useSelectedTodo";

export const TodoList: VFC = memo(() => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const { todoData, getTodo, loading } = useGetTodo();
    const { onSelectTodo, selectedTodo } = useSelectedTodo();
    useEffect(() => getTodo(), []);
    const onClickTodo = useCallback((id: number) => {
        onSelectTodo({ id, todoData, onOpen })
    }, [todoData, onOpen])
    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>) : (
                <Wrap justify="center" p={{ base: 4, md: 10 }}>
                    {todoData.map((todo) => (
                        <WrapItem key={todo.id}>
                            <TodoCard
                                onClick={onClickTodo}
                                id={todo.id}
                                title={todo.title}
                                registrationDate={todo.todo_at}
                                detail={todo.detail}
                                complete={todo.complete} />
                        </WrapItem>
                    ))}
                </Wrap >
            )}
            <TodoDetailModal todoData={selectedTodo} isOpen={isOpen} onClose={onClose} />
        </>
    );
});
