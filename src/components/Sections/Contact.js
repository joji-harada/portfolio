import React from "react";
import "./Contact.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact">
        <form
            onSubmit={this.submitForm}
            action="https://formspree.io/meqaaaan"
            method="POST"
        >
            <h2>SEND ME A MESSAGE!</h2>
            <label style={{ margin: '10px 0' }}>Your Name:</label>
                <input
                type="text"
                name="name"
                style={{
                    padding: '5px',
                    fontWeight: 400,
                    borderRadius: '5px'}}
                />
            <label style={{ margin: '10px 0' }}>Your Email:</label>
                <input
                type="email"
                name="email"
                style={{
                    padding: '5px',
                    fontWeight: 400,
                    borderRadius: '5px'}}
                />
            <label style={{ margin: '10px 0' }}>What can I do for you?</label>
                <textarea
                type="text"
                name="message"
                style={{resize: 'none',
                    width: '250px',
                    height: '100px',
                    fontWeight: 400,
                    borderRadius: '5px'}}
                />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button style={{ margin: '10px 0', fontWeight: 'bold', lineHeight: "15px", paddingTop: "3px", borderRadius: "3px" }}>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>  
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}