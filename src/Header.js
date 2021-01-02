import React from 'react';
import HeaderLogo from "./HeaderLogo";
import AdminLoginButton from "./AdminLoginButton";
import './Header.scss';


const Header = () => {
    return <header className={"header"}>
        <div className={"container header-container"}>
            <HeaderLogo/>
            <AdminLoginButton/>
        </div>
    </header>
}

export default Header;