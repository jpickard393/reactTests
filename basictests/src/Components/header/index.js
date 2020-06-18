import React from 'react';
import logo from '../../assets/logo.png';
import './style.scss';
const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt='logo'></img>
                </div>
            </div>
            Header
        </header>
    )

};

export default Header;