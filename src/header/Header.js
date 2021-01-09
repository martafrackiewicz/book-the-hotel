import React from 'react';
import HeaderLogo from "./HeaderLogo";
import Button from "../common/Button";
import './Header.scss';

const Header = () => {

    return <header className={"header"}>
        <div className={"container navbar"}>
            <HeaderLogo/>
            <Button url={"/admin"} text={"Admin"}/>
        </div>
    </header>
}

export default Header;