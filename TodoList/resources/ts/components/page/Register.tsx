import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atom/button/PrimaryButton";

export const Register: VFC = memo(() => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRepass, setUserRepass] = useState('');
    const onChangeUserEmail = (e: ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);
    const onChangeUserPass = (e: ChangeEvent<HTMLInputElement>) => setUserPass(e.target.value);
    const onChangeUserRepass = (e: ChangeEvent<HTMLInputElement>) => setUserPass(e.target.value);
    // const onClickLogin = () => {
    //     login(userEmail, userPass);
    //     console.log(userEmail);
    //     console.log(userPass);
    //     console.log(userRepass);
    // }

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
                    <Input placeholder="Emailを入力" value={userEmail} onChange={onChangeUserEmail} />
                    <Input placeholder="Passwordを入力" value={userPass} onChange={onChangeUserPass} />
                    <Input placeholder="確認用Passwordを入力" value={userRepass} onChange={onChangeUserRepass} />
                    <PrimaryButton disabled={userEmail === "" || userPass === "" || userRepass === ""} >ログイン</PrimaryButton>
                </Stack>
            </Box>

        </Flex>
    );
})
