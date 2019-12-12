import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      messageEmail: "",
      messagePassword: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value,
      messageEmail: ""
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin() {
    if (this.state.email === "") {
      this.setState({
        messageEmail: "Please fill out these fields"
      });
    } else if (this.state.password === "") {
      this.setState({
        messagePassword: "Please fill out these fields"
      });
    } else {
      fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())

        .then(response => {
          if (response.error === true) {
            if (response.message === "Invalid password") {
              console.log(response.message);
              fetch("http://localhost:4000/loginFailed", {
                method: "POST",
                body: JSON.stringify({
                  email: this.state.email,
                  message: "Invalid password"
                }),
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              })
                .then(res => res.json())
                .then(console.log(response));
              this.setState({
                messagePassword: response.message,
                messageEmail: "",
                formError: true
              });
            }
            // if (response.message === "User does not exist") {
            //   console.log(response.message);
            //   this.setState({
            //     messageEmail: response.message,
            //     messagePassword: ""
            //   });
            // }
          } else {
            fetch("https://api.ipify.org?format=json", {
              method: "GET"
            })
              .then(res => res.json())

              .then(response => {
                console.log(response);
                fetch(
                  "https://geo.ipify.org/api/v1?apiKey=at_uamlMmgiyz0k1HPWrJQC1VsaVhpYc&ipAddress=" +
                    response.ip,
                  {
                    method: "GET"
                  }
                )
                  .then(res => res.json())

                  .then(response => {
                    console.log(response);
                    fetch("http://localhost:4000/loginEvent", {
                      method: "POST",
                      body: JSON.stringify({
                        email: this.state.email,
                        message: "Login successful",
                        ip_address: response.ip,
                        location:
                          response.location.region +
                          " " +
                          response.location.country
                      }),
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      }
                    });
                  });
              });

            if (response.admin) {
              this.props.setUsers(response.users);
            }

            this.props.changeState();

            this.props.setUser(response.user);

            this.props.history.push("/welcome");
          }
        })
        .catch(error => console.error("Error:", error));
    }
  }

  render() {
    return (
      <div id="main-container">
        <div id="login-container">
          <label id="label-id" htmlFor="uname">
            Username
          </label>

          <input
            onChange={this.handleEmail}
            className="input-field"
            type="email"
            placeholder="Enter email"
            name="email"
            required
          ></input>
          <div className="errorHandle">{this.state.messageEmail}</div>

          <label id="label-id" htmlFor="uname">
            Password
          </label>

          <input
            onChange={this.handlePassword}
            className="input-field"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          ></input>
          <div className="errorHandle">{this.state.messagePassword}</div>

          <div className="btn-container-two">
            <button
              id="login-user"
              type="submit"
              onClick={() => this.handleLogin()}
            >
              Login
            </button>
            <div id="btn-contain">
              <label id="labelsecond" htmlFor="newuser">
                New User
              </label>
              <button id="register-btn" type="submit">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
