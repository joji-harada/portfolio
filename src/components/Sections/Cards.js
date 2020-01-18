import React, {Component} from 'react';
import Projects from './Projects';
import './Cards.css';
import img1 from './Cardimg/sun1.jpeg'
import img3 from './Cardimg/glacier3.jpeg'


class Cards extends Component{
     render(){
         return(
            <div id="projects" className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Projects
                            imgsrc={img1}
                            title="Java College DB"
                            link="https://github.com/joji-harada/java_lists"
                            description="Occaecat et incididunt nisi amet occaecat quis est. Consectetur sit do ipsum ipsum amet quis duis nostrud proident eu. Do aliqua qui eiusmod non adipisicing id aute ad. Esse ea anim reprehenderit consectetur esse ea labore cupidatat in mollit eiusmod laborum ullamco enim. Irure veniam magna incididunt exercitation. Exercitation velit sint incididunt eiusmod laboris duis exercitation dolor anim esse aliquip incididunt do. Cupidatat minim sint ad nulla magna id Lorem ullamco officia anim cupidatat ad aliquip id."
                        />
                    </div>
                    <div className="col-md-4">
                        <Projects
                            imgsrc={"https://media.giphy.com/media/j51UlwdNabvFkL1LoO/giphy.gif"}
                            title="Top Pot Doughnuts Website"
                            link="https://github.com/joji-harada/toppot"
                            description="A full build website for Top Pot Doughnuts. I took design influence from local eateries and bars including Molly Moon's and Optimism Brewing Co. I utilized two JQuery libraries to implement several UX functions. The first was the parallax scrolling affect on each webpage, and more importantly I used an accordion in order to condense the locations list."
                        />
                    </div>
                    <div className="col-md-4">
                        <Projects
                            imgsrc={img3}
                            title="MERN Shopping List"
                            link="https://github.com/joji-harada/mern_shopping_list"
                            description="Occaecat et incididunt nisi amet occaecat quis est. Consectetur sit do ipsum ipsum amet quis duis nostrud proident eu. Do aliqua qui eiusmod non adipisicing id aute ad. Esse ea anim reprehenderit consectetur esse ea labore cupidatat in mollit eiusmod laborum ullamco enim. Irure veniam magna incididunt exercitation. Exercitation velit sint incididunt eiusmod laboris duis exercitation dolor anim esse aliquip incididunt do. Cupidatat minim sint ad nulla magna id Lorem ullamco officia anim cupidatat ad aliquip id."
                        />
                    </div>
                </div>
            </div>
         );
     }
}

export default Cards;