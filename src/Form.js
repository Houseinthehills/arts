import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job" className="form-label">
          Job
        </label>
        <input
          className="form-control"
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="btn btn-primary"
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
}

export default Form;
