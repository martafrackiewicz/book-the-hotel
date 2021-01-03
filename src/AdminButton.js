import React from 'react';
import {Link} from "react-router-dom";
import "./AdminButton.scss";

const AdminButton = () => {
    return <Link to={"/admin"} className={"btn btn-outline-secondary header-button"}>Admin</Link>
}

export default AdminButton;