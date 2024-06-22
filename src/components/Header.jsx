import React from "react";
import logo from '../assets/cocretainc.jpg';

const Header = () => {
    return(
        <header>
            <img src={logo} className='logo' alt='logo empresa'/>
            <p className="header-text">Croqueta INC</p>
        </header>
    );
};


export default Header