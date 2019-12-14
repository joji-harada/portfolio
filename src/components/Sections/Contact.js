import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            errormessage: ''
        };
    }
    mySubmitHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        event.preventDefault();
        if (nam === "comment") {
            if (val === '') {
                err = <strong>You must enter a comment</strong>;
            }
        }
        if(nam === "name"){
            if (val === ''){
                err = <strong>You must enter a name</strong>
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    render() {
        return (
            <div id="contact">
                <form onSubmit={this.mySubmitHandler}>
                    <h1>Contact Me</h1>
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        name='username'
                    />
                    {this.state.errormessage}
                    <p>What service do you require?</p>
                    <textarea
                        type='text'
                        name='comment'
                    >
                    </textarea>
                    {this.state.errormessage}
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;