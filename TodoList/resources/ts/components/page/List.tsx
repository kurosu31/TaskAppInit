import { Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

const lists = [
    {
        id: 1,
        title: 'Room Cleaning',
        registrationDate: '4/20',
        detail: 'detaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetail',
        complete: 'complete',
    },
    {
        id: 2,
        title: 'Room Cleaning',
        registrationDate: '4/20',
        detail: 'detaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetail',
        complete: 'complete',
    },
    {
        id: 3,
        title: 'Room Cleaning',
        registrationDate: '4/20',
        detail: 'detaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetail',
        complete: 'complete',
    },
    {
        id: 4,
        title: 'Room Cleaning',
        registrationDate: '4/20',
        detail: 'detaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetail',
        complete: 'complete',
    }

]

export const TodoList: VFC = memo(() => {
    return (
        <Wrap justify="center" p={{ base: 4, md: 10 }}>
            {lists.map((list) => (
                <WrapItem key={list.id}>
                    <UserCard  title={list.title} registrationDate={list.registrationDate} detail={list.detail} complete={list.complete} />
                </WrapItem>
            ))}
        </Wrap >
    );
});
