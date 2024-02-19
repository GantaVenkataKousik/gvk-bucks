import React, { useState } from 'react';

const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const changeStatus = (event) => {
        const clickedLink = event.target.innerText.toLowerCase();
        setActiveLink(clickedLink);
    };

    return (
        <header>
            <div className="logo">
                <a href="#"><img src="/images/logo.png" alt="Starbucks Logo" /></a>
            </div>
            <nav className="links">
                <ul>
                    <li><a href="#" className={activeLink === 'home' ? 'active' : ''} onMouseOver={changeStatus}>Home</a></li>
                    <li><a href="#" className={activeLink === 'menu' ? 'active' : ''} onMouseOver={changeStatus}>Menu</a></li>
                    <li><a href="#" className={activeLink === "what's new" ? 'active' : ''} onMouseOver={changeStatus}>What's New</a></li>
                    <li><a href="#" className={activeLink === 'contact' ? 'active' : ''} onMouseOver={changeStatus}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
