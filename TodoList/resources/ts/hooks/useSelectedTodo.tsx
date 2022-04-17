import { useCallback, useState } from "react";
import { Todo } from "../type/todo";

type Props = {
    id: number;
    todoData: Array<Todo>;
    onOpen: () => void;
}
export const useSelectedTodo = () => {

    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const onSelectTodo = useCallback((props: Props) => {
        const { id, todoData, onOpen } = props;
        const targetTodo = todoData.find((todo) => (todo.id === id));
        setSelectedTodo(targetTodo ?? null);
        onOpen();
    }, [])

    return { onSelectTodo, selectedTodo };
}
