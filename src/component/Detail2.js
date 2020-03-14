import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: []
    };
  }
  componentDidMount() {
    const id = this.props;
    console.log(id);
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F"
      )
      .then(res => {
        this.setState({
          datas: res.data.items
        });
      });
  }

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        {this.state.datas.map((param, index) => {
          return (
            <>
              <div className="container blue-text " align="center">
                <h3>{param.title}</h3>
              </div>
              <div className="container " align="center">
                <p>{param.pubDate}</p>
              </div>
              <h3 className="container" align="center">
                <img width="600px" src={param.thumbnail} />
              </h3>
              <div className="container" align="center">
                {param.description}
              </div>
              <div className="container  " align="center">
                <a href={param.link}>Page asli</a>
              </div>
              <div className="container  " align="center">
                <>
                  <button onClick={this.handleLogout}>Logout</button>
                </>
              </div>
              <hr />
            </>
          );
        })}
      </>
    );
  }
}

export default Login;
