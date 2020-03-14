import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "wicak",
      password: "luthfi",
      token: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(
        "https://penjualanapp-api.herokuapp.com/api/v1/auth/login",
        dataInput
      )
      .then(res =>
        this.setState({
          token: res.data.data.token,
          cek: false
        })
      )
      .then(res => localStorage.setItem("token", this.state.token))
      .catch(err =>
        this.setState({
          cek: true
        })
      );
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />;
    } else if (this.state.cek === true) {
      return <h1>username atau password salah</h1>;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
