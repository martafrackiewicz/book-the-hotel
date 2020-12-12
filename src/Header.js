import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";
import './Header.scss';


const Header = () => {
    return <header className={"header"}>
        <div className={"container header-container"}>
            <HeaderLogo/>
            <HeaderButton/>
        </div>
    </header>
}

export default Header;