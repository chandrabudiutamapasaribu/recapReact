import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: []
    };
  }
  componentDidMount() {
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
              <hr />
            </>
          );
        })}
      </>
    );
  }
}

export default Login;
