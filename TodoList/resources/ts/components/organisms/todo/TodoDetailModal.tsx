import React, { VFC, memo, useCallback } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../../atom/button/PrimaryButton";
import { Todo } from "../../../type/todo";
import { useHistory } from "react-router-dom";

type Props = {
    todoData: Todo | null;
    isOpen: boolean;
    onClose: () => void;
}

export const TodoDetailModal: VFC<Props> = memo((props) => {
    const history = useHistory();
    const { todoData, isOpen, onClose } = props;
    const completedMark = todoData?.complete ? "completed" : "incomplete";
    const onClickEdit = useCallback(() => {
        history.push({ pathname: "/home/todo_edit", state: todoData })
        console.log(todoData);
    }, [todoData]);
    // const onClickDelete = () => {

    // }
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay />
            <ModalContent pb={4}>
                <ModalHeader>Todo Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <Text as="p" fontWeight="bold">Title</Text>
                        <Text as="p" pl={3}>{todoData?.title}</Text>
                        <Text as="p" fontWeight="bold">Date</Text>
                        <Text as="p" pl={3}>{todoData?.todo_at}</Text>
                        <Text as="p" fontWeight="bold">Contents</Text>
                        <Text as="p" pl={3}>{todoData?.detail}</Text>
                        <Text as="p" fontWeight="bold">complete</Text>
                        <Text as="p" pl={3}>{completedMark}</Text>
                        <PrimaryButton onClick={onClickEdit}>Edit</PrimaryButton>
                        <PrimaryButton onClick={onClickEdit}>Delete</PrimaryButton>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
)
