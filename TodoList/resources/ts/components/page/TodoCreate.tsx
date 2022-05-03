import { FormControl, Center, Flex, Input, Stack, FormLabel, Heading, Spinner, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React, { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { useGetTodo } from "../../hooks/useGetTodo";
import { useMessage } from "../../hooks/useMessage";
import { formDataType } from "../../type/todo";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { TodoFrom } from "../organisms/todo/TodoFrom";

export const TodoCreate: VFC = memo(() => {
    const { showMessage } = useMessage();
    const { todoData, getTodo, loading } = useGetTodo();
    const history = useHistory();
    const [formData, setFormData] = useState<formDataType>({ title: "", detail: "", complete: 0 });

    useEffect(() => getTodo(), []);

    const CreateTodo = async () => {
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

    const inputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

                    <Flex bg="white" p={4} w="400px" borderRadius="md">
                        <Stack spacing={3} w="100%" mx={3} mb={3}>
                            <Heading textAlign="center" as='h1'>InputTodo</Heading>
                            <FormControl>
                                <FormLabel fontWeight="bold">title</FormLabel>
                                <Input value={formData.title} name="title" placeholder="予定を記入" onChange={inputChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="bold">detail</FormLabel>
                                <Textarea value={formData.detail} name="detail" placeholder="予定を記入" onChange={inputChange} h="200px" />
                            </FormControl>
                            <PrimaryButton onClick={CreateTodo}>登録</PrimaryButton>
                        </Stack>
                    </Flex >
                    {/* <TodoFrom CreateTodo={CreateTodo} onChange={inputChange}>InputTodo</TodoFrom> */}
                </Center >
            )}

        </>

    );
});
