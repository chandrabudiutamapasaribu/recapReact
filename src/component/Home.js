import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import HomeProp from "./HomeProps";
import "./list.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataku: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F"
      )
      .then(res => {
        this.setState({
          dataku: res.data.items
        });
      });
  }
  handlerClick = (title, i) => {
    this.props.history.push(`/home/${i}`);
  };
  render() {
    if (localStorage.getItem("token") == null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Navbar />
        <img
          className="gambar"
          src="https://newrevive.detik.com/images/ece26aa7b7a6e1bc2bf2b9c03c53a83d.jpg"
        />
        {this.state.dataku.map((param, index) => {
          return (
            <>
              <div className="container">
                <div className="post card">
                  <div className="title">
                    <img src={param.thumbnail} />
                    <HomeProp
                      data={param.title}
                      handlerClick={() => this.handlerClick(param.title, index)}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default Home;
