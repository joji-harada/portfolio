import React from 'react';
import './CenterContent.css';
import { SocialIcon } from 'react-social-icons';

const CenterContent = props => (
    <div id="home" className="centerMe">
        <div className="centerContent">
            <h1>GEORGE ALLISON</h1>
            <h2
                style={{fontSize: "1.3rem", color: "black", margin: "20px 0"}}
            >software engineer</h2>
            <ul className="centerList">
                <li><SocialIcon url="https://github.com/joji-harada" title="GitHub" target="_blank" bgColor="#000" fgColor="#fff" /></li>
                <li><SocialIcon url="https://www.linkedin.com/in/george-allison-728975139/" title="LinkedIn" target="_blank" bgColor="#000" fgColor="#fff" /></li>
            </ul>
        </div>
    </div>
);

export default CenterContent;