import React from 'react';
import './CenterContent.css';
import { SocialIcon } from 'react-social-icons';

const CenterContent = props => (
    <div className="centerContent">
        <h1>GEORGE ALLISON</h1>
        <ul className="centerList">
            <li><SocialIcon url="https://github.com/joji-harada" /></li>
            <li><SocialIcon url="https://www.linkedin.com/in/george-allison-728975139/" /></li>
        </ul>
    </div>
);

export default CenterContent;