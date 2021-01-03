import React from 'react';
import {Link} from "react-router-dom";
import "./Button.scss";

const Button = ({url, text}) => {
    return <Link to={url} className={"btn btn-outline-secondary button"}>{text}</Link>
}

export default Button;