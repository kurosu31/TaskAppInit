import React, { VFC, memo } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
    const history = useHistory();
    const onClickLinkHome = () => {
        history.push('/home');
    }
    return (
        <Flex
            bg="blue.500"
            p={{ base: 3, md: 5 }}
            justify="space-between"
        >
            <Heading as="h1" onClick={onClickLinkHome} color="gray.50" >TodoList</Heading>
            <Flex align="center" justify="center" flexGrow={2} display={{ base: "none", md: "flex" }}>
                <Box px={{ base: 3, md: 5 }} fontSize="lg" fontWeight="bold" color="gray.50" >
                    <Link>Edit</Link>
                </Box>
                <Box px={{ base: 3, md: 5 }} fontSize="lg" fontWeight="bold" color="gray.50" >
                    <Link>input</Link>
                </Box>
            </Flex>
            <Box
                fontSize="lg"
                fontWeight="bold"
                color="gray.50"
                display={{ base: "flex", md: "none" }}
                px={{ base: 3, md: 5 }}
            >
                <IconButton
                    aria-label="メニューボタン"
                    icon={<HamburgerIcon />}
                    size="sm"
                    variant="unstyled"
                />
            </Box>
        </Flex>
    );
})
