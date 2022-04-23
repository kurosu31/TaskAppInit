import { FormControl, Center, Flex, Input, Stack, FormLabel, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { useGetTodo } from "../../hooks/useGetTodo";
import { useMessage } from "../../hooks/useMessage";
import { PrimaryButton } from "../atom/button/PrimaryButton";

type formDataType = {
    title: string;
    detail: string;
    complete: number;
    [key: string]: string | number;
}

// type Keys = {
//     key: title | detale;
// }

export const TodoFrom: VFC = memo(() => {
    const { showMessage } = useMessage();
    const { todoData, getTodo, loading } = useGetTodo();
    const history = useHistory();
    const [formData, setFormData] = useState<formDataType>({ title: "", detail: "", complete: 0 });

    useEffect(() => getTodo(), []);

    const onClickSubmit = async () => {
        await axios
            .post('/api/posts/store', {
                title: formData.title,
                detail: formData.detail,
                complete: 0
            })
            .then((res) => {
                console.log(res);
                const tempPosts = todoData
                tempPosts.push(res.data);
                /*                setPosts(tempPosts) */
                setFormData({ title: "", detail: "", complete: 0 });
                showMessage({ title: "登録しました。", status: "success" });
                console.log(formData);
                history.push('/home');
            }).catch((err) => {
                console.log(err);
                console.log("無記入");
                showMessage({ title: "記入漏れがあります。", status: "error" });
            });
    }

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key: keyof formDataType = e.target.name;
        const value: string = e.target.value;
        console.log(key);
        formData[key] = value;
        console.log(key);
        let data = Object.assign({}, formData);
        setFormData(data);
        console.log(value);
    }


    return (
        <>
            {loading ? (
                <Center h="100vh">
                    < Spinner />
                </Center>
            ) : (
                <Center mt={10}>
                    <Flex bg="white" p={4} w="300px" borderRadius="md">
                        <Stack spacing={3} w="100%" mx={3} mb={3}>
                            <Heading textAlign="center" as='h1'>Input Todo</Heading>
                            <FormControl>
                                <FormLabel fontWeight="bold">title</FormLabel>
                                <Input type="text" name="title" placeholder="予定を記入" onChange={inputChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="bold">detail</FormLabel>
                                <Input type="text" name="detail" placeholder="予定を記入" onChange={inputChange} />
                            </FormControl>
                            <PrimaryButton onClick={onClickSubmit}>登録</PrimaryButton>
                        </Stack>
                    </Flex>
                </Center >
            )}

        </>

    );
});
