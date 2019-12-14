import React from 'react';
import { Link } from 'react-scroll';
import './Slide.css';

const Slide = props => {
    let slideClasses = 'slide';
    if(props.show){
        slideClasses = 'slide open';
    }
    return(
        <nav className={slideClasses}>
            <ul onClick={props.click}>
                <li>
                    <Link
                        onClick={props.slideClickHandler}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >Home</Link></li>
                <li>
                    <Link
                        onClick={props.slideClickHandler}
                        activeClass="active"
                        to="projects" 
                        spy={true}
                        smooth={true}
                        offset={-56}
                        duration={700}
                    >Projects</Link></li>
                <li>
                    <Link
                        onClick={props.slideClickHandler}
                        activeClass="active"
                        to="contact" 
                        spy={true}
                        smooth={true}
                        offset={-56}
                        duration={700}
                    >Contact</Link></li>
            </ul>
        </nav>
    )
};

export default Slide;