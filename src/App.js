import React, { Component } from 'react';
import NavBar from './components/Nav/Nav';
import Slide from './components/SlideMenu/Slide';
import BackDrop from './components/BackDrop/BackDrop';
import './App.css';

class App extends Component {
  state = {
    slideOpen: false
  };

  slideToggleHandler = () => {
    this.setState((prevState) => {
      return {slideOpen: !prevState.slideOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({slideOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.slideOpen){
      backdrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
      <div style={{height:'100%'}} className="App">
        <NavBar slideClickHandler={this.slideToggleHandler}/>
        <Slide show={this.state.slideOpen} />;
        {backdrop}
        
      </div>
    );
  }
}

export default App;
