import React from 'react';
import {Link} from "react-router-dom";
import './HeaderLogo.css';

const HeaderLogo = () => {
    return <Link to={"/"} className={"header-logo"}>BookTheHotel</Link>
}

export default HeaderLogo;