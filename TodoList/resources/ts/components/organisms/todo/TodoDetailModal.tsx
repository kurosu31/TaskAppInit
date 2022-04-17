import React, { VFC, memo } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../../atom/button/PrimaryButton";
import { Todo } from "../../../type/todo";
import { useHistory } from "react-router-dom";

type Props = {
    todo: Todo | null;
    isOpen: boolean;
    onClose: () => void;
}

export const TodoDetailModal: VFC<Props> = memo((props) => {
    const history = useHistory();
    const onClickEdit = () => history.push("/home/todo_edit");
    const { todo, isOpen, onClose, } = props;
    const completedMark = todo?.complete ? "completed" : "incomplete";
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay />
            <ModalContent pb={4}>
                <ModalHeader>Todo Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <Text as="p">Title</Text>
                        <Text as="p" pl={3}>{todo?.title}</Text>
                        <Text as="p">Date</Text>
                        <Text as="p" pl={3}>{todo?.todo_at}</Text>
                        <Text as="p">Contents</Text>
                        <Text as="p" pl={3}>{todo?.detail}</Text>
                        <PrimaryButton onClick={onClickEdit}>{completedMark}</PrimaryButton>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
)
