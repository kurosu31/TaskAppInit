import { Flex, FormControl, Stack, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { formDataType } from "../../../type/todo";
import { CompletedButton } from "../../atom/button/CompletedButton";

import { PrimaryButton } from "../../atom/button/PrimaryButton";

type Props = {
    data?: formDataType | null;
    children: string;
    updateTodo: () => void;
    updateComplete: () => void;
    CreateTodo: () => void;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
// type PropsCreate = {
//     data?: formDataType | null;
//     children: string;
//     onClick: () => void;
//     onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
// }
// type PropsEdit = {
//     data?: formDataType | null;
//     children: string;
//     updateTodo: () => void;
//     updateComplete: () => void;
//     onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
// }

export const TodoFrom = memo((props: Props) => {
    console.log(props);
    const { data, children, onChange, updateTodo, updateComplete, CreateTodo } = props;
    const [completed, setCompleted] = useState(Boolean(data?.complete));
    console.log(CreateTodo);
    console.log(data);
    const Console = () => {
        setCompleted(!completed);
        console.log(completed);
    }
    const completedMark = completed ? "completed" : "incomplete";

    return (
        <Flex bg="white" p={4} w="400px" borderRadius="md">
            <Stack spacing={3} w="100%" mx={3} mb={3}>
                <Heading textAlign="center" as='h1'>{children}</Heading>
                <FormControl>
                    <FormLabel fontWeight="bold">title</FormLabel>
                    <Input type="text" value={data?.title} name="title" placeholder="予定を記入" onChange={onChange} />
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight="bold">detail</FormLabel>
                    <Textarea h="200px" name="detail" value={data?.detail} placeholder="予定を記入" onChange={onChange} />
                </FormControl>
                {data ? (
                    <>
                        <FormControl textAlign="right">
                            <CompletedButton name="complete" onClick={updateComplete} >{completedMark}</CompletedButton>
                        </FormControl>
                        <PrimaryButton onClick={updateTodo}>登録</PrimaryButton>
                    </>
                ) : (
                    <PrimaryButton onClick={CreateTodo}>登録</PrimaryButton>
                )}
            </Stack>
        </Flex >
    );
});
