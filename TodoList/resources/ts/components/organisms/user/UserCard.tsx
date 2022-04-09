import { Box, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import { PrimaryButton } from "../../atom/button/PrimaryButton";

type Props = {
    title: string;
    registrationDate: string;
    detail: string;
    complete: string;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { title, registrationDate, detail, complete } = props;
    return (
        <Box w="280px" h="200px" bg="white" borderRadius="md" p={2} >
            <Stack spacing={3}>
                <Flex mb={2}>
                    <Text as="h1" flexGrow={3} wordBreak="break-word">{title}</Text>
                    <Text as="p" flexGrow={1} textAlign="right">{registrationDate}</Text>
                </Flex>
                <Text as="p" h="80px">{detail}</Text>
                <Flex justify="center">
                    <PrimaryButton>Edit</PrimaryButton>
                    <PrimaryButton>{complete}</PrimaryButton>
                </Flex>
            </Stack>
        </Box>
    );
});
