import React, { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/page/Login";
import { Page404 } from "../components/page/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { homeRoutes } from "./HomeRouter";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>

            <Route path="/home" render={({ match: { url } }) => (
                <Switch>
                    {homeRoutes.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                            <HeaderLayout>{route.children}</HeaderLayout>
                        </Route>))}
                </Switch>
            )} />
            < Route exact path="*" >
                <Page404 />
            </Route >
        </Switch >
    );
})
