import React, { VFC, memo } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atom/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
// import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const history = useHistory();
    const onClickLinkHome = () => history.push('/home');
    const onClickLinkEdit = () => history.push('/home/todo_edit');
    const onClickLinkInput = () => history.push('/home/todo_list');



    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Flex
            bg="blue.500"
            p={{ base: 3, md: 5 }}
            justify="space-between"
        >
            <Heading as="h1" onClick={onClickLinkHome} color="gray.50" >TodoList</Heading>
            <Flex align="center" justify="center" flexGrow={2} display={{ base: "none", md: "flex" }}>
            <Box px={{ base: 3, md: 5 }} fontSize="lg" fontWeight="bold" color="gray.50" >
                    <Link onClick={onClickLinkHome}>Home</Link>
                </Box>
                <Box px={{ base: 3, md: 5 }} fontSize="lg" fontWeight="bold" color="gray.50" >
                    <Link onClick={onClickLinkEdit}>Edit</Link>
                </Box>
                <Box px={{ base: 3, md: 5 }} fontSize="lg" fontWeight="bold" color="gray.50" >
                    <Link onClick={onClickLinkInput}>input</Link>
                </Box>
            </Flex>
            <Box
                fontSize="lg"
                fontWeight="bold"
                color="gray.50"
                display={{ base: "flex", md: "none" }}
                px={{ base: 3, md: 5 }}
            >
                <MenuIconButton onOpen={onOpen} />
                <MenuDrawer onClose={onClose} isOpen={isOpen} onClickLinkHome={onClickLinkHome} onClickLinkEdit={onClickLinkEdit} onClickLinkInput={onClickLinkInput} />
            </Box>
        </Flex>
    );
})
