import React, {useEffect, useState} from "react";
import { Redirect, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
    const { state } = useLocation();
    const { from } = state || { from: { pathname: "/" } };
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                logged.isAuthenticated = true;
                setRedirectToReferrer(true);
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };


    if (redirectToReferrer) {
        return <Redirect to={from} />;
    }

    return (
        <div className="container">
            <form onSubmit={e => login(e)}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={handleEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={handlePassword} />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}

export default Login;
export const logged = {
    isAuthenticated: false
}