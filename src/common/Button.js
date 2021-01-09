import React from 'react';
import {Link} from "react-router-dom";
import "./Button.scss";

const Button = ({url, text, size="big"}) => {
    return <Link to={url} className={`btn btn-outline-secondary button ${size}-button`}>{text}</Link>
}

export default Button;