import React from "react";
import { Home } from "../components/page/Home";
import { TodoList } from "../components/page/List";
import { Page404 } from "../components/page/Page404";
import { TodoEdit } from "../components/page/TodoEdit";
import { TodoFrom } from "../components/page/TodoFrom";

export const homeRoutes = [
    {
        path: "/",
        exact: true,
        children: <Home />,
    },
    {
        path: "/todo_list",
        exact: false,
        children: <TodoList />,
    },
    {
        path: "/todo_input",
        exact: false,
        children: <TodoFrom />,
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
