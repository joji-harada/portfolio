import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import ToggleButton from '../SlideMenu/ToggleButton';
import './Nav.css';



class NavBar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
    return(
        <header className="navbar">
            <nav className="navbar__nav">
                <div className="navbar__button">
                    <ToggleButton click={this.props.slideClickHandler}/>
                </div>
                <div className="navbar__logo" onClick={this.scrollToTop}>
                    <h2 title="To the top">GEORGE ALLISON</h2>
                </div>
                <div className="spacer" />
                    <div className="navbar_items">
                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}
                                >Home</Link></li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="projects" 
                                    spy={true}
                                    smooth={true}
                                    offset={-56}
                                    duration={600}
                                >Projects</Link></li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact" 
                                    spy={true}
                                    smooth={true}
                                    offset={-56}
                                    duration={600}
                                >Contact</Link></li>
                        </ul>
                    </div>
            </nav>
        </header>
    )
    }
}

export default NavBar;