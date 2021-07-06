import React, {Component} from 'react';
import Projects from './Projects';
import './Cards.css';


class Cards extends Component{
     render(){
         return(
            <div id="projects" className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Projects
                            imgsrc={"https://media.giphy.com/media/LGQlsmJ5mFl7TB4ZOS/giphy.gif"}
                            title="ETF Stock Tracker"
                            link="https://github.com/joji-harada/FNGU-Stock-Tracker"
                            description="This project aims to solve a common problem for investors with stake in an Exchange Trade Fund (ETF). Investors can now view the performances of all securities contained in an ETF on one page, as well as dynamically displaying content dependent on individual stock performance."
                        />
                    </div>
                    <div className="col-md-4">
                        <Projects
                            imgsrc={"https://media.giphy.com/media/LM8JT6zjBss57XpXMh/giphy.gif"}
                            title="Java College DB"
                            link="https://github.com/joji-harada/collegedb"
                            description="A Java program designed to read in csv files, analyze the student data and assign the values to a student object then store all the student objects within a circular singly linked list. This data structure can then apply search, sort and filter methods to create sorted/filtered output files. All data structures and methods were created from scratch."
                        />
                    </div>
                    <div className="col-md-4">
                        <Projects
                            imgsrc={"https://media.giphy.com/media/Ka2cNt6X4WlirWbcIP/giphy.gif"}
                            title="MERN Shopping List"
                            link="https://github.com/joji-harada/mern_shopping_list"
                            description="This is a simple full stack MERN application. The application communicates with a single mongo db cluster that holds items input by a user through a modal on the front end. State changes managed with Redux & db communications with Axios (files with axios implementation are in the actions directory). Reactstrap installed to apply styles to the navbar, list and modal for item input."
                        />
                    </div>
                </div>
            </div>
         );
     }
}

export default Cards;