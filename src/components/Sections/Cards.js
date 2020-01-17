import React, {Component} from 'react';
import Projects from './Projects';
import './Cards.css';
import img1 from './Cardimg/sun1.jpeg'
import img2 from './Cardimg/sun2.jpeg'
import img3 from './Cardimg/glacier3.jpeg'


class Cards extends Component{
     render(){
         return(
            <div id="projects" className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Projects imgsrc={img1} title="Java College DB" link="https://github.com/joji-harada/java_lists" />
                    </div>
                    <div className="col-md-4">
                        <Projects imgsrc={img2} title="Django Inventory App" link="https://github.com/joji-harada/musicapp" />
                    </div>
                    <div className="col-md-4">
                        <Projects imgsrc={img3} title="MERN Shopping List" link="https://github.com/joji-harada/mern_shopping_list" />
                    </div>
                </div>
            </div>
         );
     }
}

export default Cards;