import React from "react";

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(err => {
    if (err.length > 0) {
      valid = false;
    }
  });
  return valid;
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      admin: "",
      formErrors: {
        firstName: "*Field Required",
        lastName: "*Field Required",
        email: "*Field Required",
        password: "*Field Required"
      }
    };
  }

  handleSumbit = e => {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(
        `--submitting--
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        email: ${this.state.email}
        password: ${this.state.password}
        `
      );
      fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          admin: this.state.admin
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          console.log("Success:", console.log(response));
          this.props.history.push("/login");
        })
        .catch(error => console.error("Error:", error));
      fetch("http://localhost:4000/addUsers", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          console.log("Success:", console.log(response));
        });
    } else {
      console.log("Form invalid");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length === 0
            ? "Field required"
            : value.length < 3
            ? "minimum 3 characters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length === 0
            ? "Field required"
            : value.length < 3
            ? "minimum 3 characters required"
            : "";
        break;
      case "email":
        formErrors.email =
          value.length === 0
            ? "Field required"
            : regexEmail.test(value) && value.length > 0
            ? ""
            : "Invalid email";

        break;
      case "password":
        formErrors.password =
          value.length === 0
            ? "Field required"
            : value.length < 6
            ? "minimum 6 characters required"
            : "";
        break;
      default:
        break;
    }
    this.setState({
      formErrors,
      [name]: value
    });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div id="main-container">
        <div id="login-container">
          <div className="input-container">
            <label id="label-id" htmlFor="firstname">
              First name
            </label>

            <input
              onChange={this.handleChange}
              className="input-field"
              type="text"
              placeholder="Enter Username"
              name="firstName"
              required="required"
            ></input>
            {formErrors.firstName.length > 0 && (
              <span className="formErrors">{formErrors.firstName}</span>
            )}
          </div>

          <div className="input-container">
            <label id="label-id" htmlFor="lastName">
              Last name
            </label>

            <input
              onChange={this.handleChange}
              className="input-field"
              type="text"
              placeholder="Enter Lastname"
              name="lastName"
              required="required"
            ></input>
            {formErrors.lastName.length > 0 && (
              <span className="formErrors">{formErrors.lastName}</span>
            )}
          </div>
          <div className="input-container">
            <label id="label-id" htmlFor="email">
              email
            </label>

            <input
              onChange={this.handleChange}
              className="input-field"
              type="email"
              placeholder="Enter your email"
              name="email"
              required="required"
            ></input>
            {formErrors.email.length > 0 && (
              <span className="formErrors">{formErrors.email}</span>
            )}
          </div>

          <div className="input-container">
            <label id="label-id" htmlFor="password">
              Password
            </label>

            <input
              onChange={this.handleChange}
              className="input-field"
              type="password"
              placeholder="Enter Password"
              name="password"
              required="required"
            ></input>
            {formErrors.password.length > 0 && (
              <span className="formErrors">{formErrors.password}</span>
            )}
          </div>

          <div className="btn-container">
            <button id="login-btn" type="submit" onClick={this.handleSumbit}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
