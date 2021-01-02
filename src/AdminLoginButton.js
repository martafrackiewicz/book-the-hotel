import React from 'react';
import {Link} from "react-router-dom";
import "./AdminLoginButton.scss";

const AdminLoginButton = () => {
    return <Link to={"/admin"} className={"btn btn-outline-secondary header-button"}>Admin</Link>
}

export default AdminLoginButton;