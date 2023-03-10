import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  // Capture user input and update the state
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // ensures user does not submit with missing information
    if (!this.state.name || !this.state.email || !this.state.message) {
      alert("Please fill in all fields in the form");
      return;
    } else {
      return alert("Thank you for getting in touch!");
    }
  };

  // Renders HTML for Contact page
  render() {
    return (
      <div className="p-4">
        <h1>Contact</h1>
        <p>
          Got questions or want to reach out? Feel free to contact me through
          the form below!
        </p>
        <form>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="input"
            placeholder="Message"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <p>
          You can also drop me an email at{" "}
          <a href="mailto:cl.lee.ofz@gmail.com">cl.lee.ofz@gmail.com</a> or
          connect on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/cl-lee/"
          >
            LinkedIn
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;
