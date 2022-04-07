import React from "react";
import { Home } from "../Page/Home";
import { TodoList } from "../Page/List";
import { Page404 } from "../Page/Page404";
import { TodoEdit } from "../Page/TodoEdit";

export const homeRoutes = [
    {
        path: "/home",
        exact: true,
        children: <Home />,
    },
    {
        path: "/todo_list",
        exact: false,
        children: <TodoList />,
    },
    {
        path: "/todo_edit",
        exact: false,
        children: <TodoEdit />,
    },
    {
        path: "/*",
        exact: false,
        children: <Page404 />,
    },
]
