import React from "react";
import axios from "axios";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const index = this.props.match.params.i;

    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F"
      )
      .then(res => {
        this.setState({
          data: res.data.items[index]
        });
      });
  }
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };
  render() {
    const { data } = this.state;
    return (
      <>
        <div className="container blue-text " align="center">
          <h3>{data.title}</h3>
        </div>
        <div className="container " align="center">
          <p>{data.pubDate}</p>
        </div>
        <h3 className="container" align="center">
          <img width="600px" src={data.thumbnail} />
        </h3>
        <div className="container" align="center">
          {data.description}
        </div>
        <div className="container  " align="center">
          <a href={data.link}>Page asli</a>
        </div>
        <div className="container  " align="center">
          <>
            <button onClick={this.handleLogout}>Logout</button>
          </>
        </div>
        <hr />
      </>
    );
  }
}

export default Detail;
