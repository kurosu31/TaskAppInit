import React, { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../Page/Login";
import { Page404 } from "../Page/Page404";
import { homeRoutes } from "./HomeRouter";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/" >
                <Login />
            </Route>

            <Route path="/home" render={({ match: { url } }) => (
                <Switch>
                    {homeRoutes.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                            {route.children}
                        </Route>
                    ))}
                </Switch>
            )} />
            <Route exact path="*" >
                <Page404 />
            </Route>
        </Switch>
    );
})
