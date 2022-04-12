import React, { VFC, memo } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../../atom/button/PrimaryButton";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const TodoDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose, } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay />
            <ModalContent pb={4}>
                <ModalHeader>Todo Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <Text as="p">Title</Text>
                        <Text as="p" pl={3}>Room Cleaning</Text>
                        <Text as="p">Date</Text>
                        <Text as="p" pl={3}>2022/04/11</Text>
                        <Text as="p">Contents</Text>
                        <Text as="p" pl={3}>Redecorate the room.</Text>
                        <PrimaryButton>Edit</PrimaryButton>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
)
