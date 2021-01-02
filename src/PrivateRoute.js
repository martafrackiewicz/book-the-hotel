import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { logged } from './Login';
import AdminPanel from "./AdminPanel";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();

    return (
        <Route {...rest}>
            {logged.isAuthenticated === true ?
                <AdminPanel />
                :
                <Redirect to={{ pathname: "/login", state: { from: location } }} />
            }
        </Route>
    );
};

export default PrivateRoute;