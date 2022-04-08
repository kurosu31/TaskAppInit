
import React, { VFC, memo } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickLinkHome: () => void;
    onClickLinkEdit: () => void;
    onClickLinkInput: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen, onClickLinkHome, onClickLinkEdit, onClickLinkInput } = props;

    return (
        <Drawer placement="left" size="sm" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent textAlign="center">
                <DrawerHeader fontWeight="bold">Menu</DrawerHeader>
                <DrawerBody>
                    <Stack spacing={4}>
                        <Button _focus={{ boxShadow: "none" }} w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkHome}>Home</Button>
                        <Button _focus={{ boxShadow: "none" }} w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkEdit}>Edit</Button>
                        <Button _focus={{ boxShadow: "none" }} w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkInput}>TodoList</Button>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
})
