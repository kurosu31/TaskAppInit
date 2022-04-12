
import React, { VFC, memo } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickLinkHome: () => void;
    onClickLinkList: () => void;
    onClickLinkEdit: () => void;
    onClickLinkInput: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen, onClickLinkHome, onClickLinkList, onClickLinkEdit, onClickLinkInput } = props;

    return (
        <Drawer autoFocus={false} placement="left" size="sm" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent textAlign="center">
                <DrawerHeader fontWeight="bold">Menu</DrawerHeader>
                <DrawerBody>
                    <Stack spacing={4}>
                        <Button  w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkHome}>Home</Button>
                        <Button  w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkList}>List</Button>
                        <Button  w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkEdit}>Edit</Button>
                        <Button  w="100%" _hover={{ color: "gray.50", bg: "blue.500" }} onClick={onClickLinkInput}>input</Button>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
})
