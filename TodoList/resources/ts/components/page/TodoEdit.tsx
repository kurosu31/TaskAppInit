import { Flex, FormControl, Stack, FormLabel, Heading, Input, Textarea, Center } from "@chakra-ui/react";
import axios from "axios";
import React, { ChangeEvent, memo, useState, VFC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useMessage } from "../../hooks/useMessage";
import { formDataType } from "../../type/todo";
import { CompletedButton } from "../atom/button/CompletedButton";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { TodoFrom } from "../organisms/todo/TodoFrom";

export const TodoEdit: VFC = memo(() => {
    const history = useHistory();
    const { showMessage } = useMessage();
    const { state } = useLocation<formDataType>();
    const [editData, setEditData] = useState(state);
    const [completed, setCompleted] = useState<boolean>(Boolean(editData?.complete));
    const completedMark = completed ? "completed" : "incomplete";

    const updateComplete = () => {
        console.log('updateComplete');
        setCompleted(!completed);
        console.log(completed);
    }
    const updateTodo = () => {
        //入力値を投げる
        axios
            .post('/api/update', {
                id: editData.id,
                title: editData.title,
                detail: editData.detail,
                complete: completed,
            })
            .then((res) => {
                setEditData(res.data);
                console.log(res.data);
                console.log(editData);
                showMessage({ title: "登録しました。", status: "success" });
                history.push('/home/todo_list');
            })
            .catch(error => {
                console.log(error);
                showMessage({ title: "記入漏れがあります。", status: "error" });
            });
    }


    const inputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const key: keyof formDataType = e.target.name;
        const value: string = e.target.value;
        console.log(key);
        editData[key] = value;
        console.log(key);
        let data = Object.assign({}, editData);
        setEditData(data);
    }


    return (
        < Center mt={10} >
            <Flex bg="white" p={4} w="400px" borderRadius="md">
                <Stack spacing={3} w="100%" mx={3} mb={3}>
                    <Heading textAlign="center" as='h1'>EditTodo</Heading>
                    <FormControl>
                        <FormLabel fontWeight="bold">title</FormLabel>
                        <Input type="text" value={editData?.title} name="title" placeholder="予定を記入" onChange={inputChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight="bold">detail</FormLabel>
                        <Textarea h="200px" name="detail" value={editData?.detail} placeholder="予定を記入" onChange={inputChange} />
                    </FormControl>
                    <FormControl textAlign="right">
                        <CompletedButton name="complete" onClick={updateComplete} >{completedMark}</CompletedButton>
                    </FormControl>
                    <PrimaryButton onClick={updateTodo}>登録</PrimaryButton>
                </Stack>
            </Flex >
        </Center >
    )
});
