import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import { PrimaryButton } from "../../atom/button/PrimaryButton";

type Props = {
    id: number;
    title: string;
    registrationDate: string;
    detail: string;
    complete: string;
    onClick: (id: number) => void;
}

export const TodoCard: VFC<Props> = memo((props) => {
    const { id, title, registrationDate, detail, complete, onClick } = props;
    const completedMark = complete ? "incomplete" : "completed"
    return (
        <Box onClick={() => onClick(id)} w="280px" h="200px" bg="white" borderRadius="md" p={2} >
            <Stack spacing={3}>
                <Flex mb={2}>
                    <Text as="h1" fontWeight="bold" flexGrow={3} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{title}</Text>
                    <Text as="p" flexGrow={1} textAlign="right">{registrationDate}</Text>
                </Flex>
                <Text as="p" h="80px">{detail}</Text>
            </Stack>
        </Box>
    );
});
