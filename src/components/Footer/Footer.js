import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {SocialIcon} from 'react-social-icons';
import './Footer.css';

class Footer extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return(
        <div className="footer">
            <div className="footer-text" onClick={this.scrollToTop}>
                <ul className="footer-icons" >
                    <li><SocialIcon url="https://github.com/joji-harada" target="_blank" title="GitHub" bgColor="#fff" fgColor="#000" style={{ height: 40, width: 40 }} /></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/george-allison-728975139/" target="_blank" title="LinkedIn" bgColor="#fff" fgColor="#000" style={{ height: 40, width: 40 }} /></li>
                    <li
                        className="credentials"
                        style={{color: 'white', marginTop: '17px', marginRight: '40px', cursor: 'default'}}>&copy;  All Rights Reserved</li>
                </ul>
            </div>
        </div>
        )
    }
   
}

export default Footer;