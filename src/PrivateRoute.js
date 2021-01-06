import React, {Component} from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { logged } from './Login'
import AdminPanel from "./AdminPanel";
import ReservationsList from "./ReservationsList";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();


    return (
        <Route {...rest}>
            {logged.isAuthenticated === true ?
                <Component />
                :
                <Redirect to={{ pathname: "/login", state: { from: location } }} />
            }
        </Route>
    );
};

export default PrivateRoute;