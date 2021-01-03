import React from 'react';
import HeaderLogo from "./HeaderLogo";
import Button from "./Button";
import './Header.scss';

const Header = () => {

    return <header className={"header"}>
        <div className={"container header-container"}>
            <HeaderLogo/>
            <Button url={"/admin"} text={"Admin"}/>
        </div>
    </header>
}

export default Header;