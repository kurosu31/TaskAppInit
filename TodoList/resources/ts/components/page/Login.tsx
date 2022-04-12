import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atom/button/PrimaryButton";

export const Login: VFC = memo(() => {
    const [userId, setUserId] = useState('');
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const { login, loading } = useAuth();
    const onClickLogin = () => {
        login(userId);
    }

    return (
        <Flex
            align="center"
            justify="center"
            h="100vh"
        >
            <Box
                w="sm"
                bg="white"
                p={4}
                borderRadius="md"
                shadow="md"
            >
                <Heading
                    as="h1"
                    size="md"
                    textAlign="center"
                >TaskList</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーIDを入力" value={userId} onChange={onChangeUserId} />
                    <PrimaryButton disabled={userId === ""} loading={loading} onClick={onClickLogin}>ログイン</PrimaryButton>
                </Stack>
            </Box>

        </Flex>
    );
})
