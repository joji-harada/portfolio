import React from 'react';

import ToggleButton from '../SlideMenu/ToggleButton';
import './Nav.css';

const NavBar = props => (
    <header className="navbar">
        <nav className="navbar__nav">
            <div className="navbar__button">
                <ToggleButton click={props.slideClickHandler}/>
            </div>
            <div className="navbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
                <div className="navbar_items">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
        </nav>
    </header>
);

export default NavBar;