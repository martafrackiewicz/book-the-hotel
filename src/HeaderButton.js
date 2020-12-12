import React from 'react';
import {Link} from "react-router-dom";
import "./HeaderButton.scss";

const HeaderButton = () => {
    return <Link to={"/admin"} className={"btn btn-outline-secondary header-button"}>Admin</Link>
}

export default HeaderButton;