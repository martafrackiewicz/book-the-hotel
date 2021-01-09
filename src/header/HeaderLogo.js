import React from 'react';
import {Link} from "react-router-dom";
import './HeaderLogo.scss';

const HeaderLogo = () => {
    return <Link to={"/"} className={"header-logo"}>BookTheHotel</Link>
}

export default HeaderLogo;