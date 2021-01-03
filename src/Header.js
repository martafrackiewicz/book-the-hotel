import React from 'react';
import HeaderLogo from "./HeaderLogo";
import AdminButton from "./AdminButton";
import './Header.scss';

const Header = () => {

    return <header className={"header"}>
        <div className={"container header-container"}>
            <HeaderLogo/>
            <AdminButton/>
        </div>
    </header>
}

export default Header;