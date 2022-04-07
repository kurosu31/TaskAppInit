import React from "react";
import { Home } from "../components/page/Home";
import { TodoList } from "../components/page/List";
import { Page404 } from "../components/page/Page404";
import { TodoEdit } from "../components/page/TodoEdit";

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
