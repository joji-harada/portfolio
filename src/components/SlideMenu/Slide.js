import React from 'react';
import './Slide.css';

const Slide = props => {
    let slideClasses = 'slide';
    if(props.show){
        slideClasses = 'slide open';
    }
    return(
        <nav className={slideClasses}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Slide;