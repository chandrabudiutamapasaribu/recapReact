import React, { Component } from "react";
import "./list.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar-fixed">
          <div>
            <nav className=" white">
              <div>
                <div className="img">
                  <img
                    height="50px"
                    src="https://akcdn.detik.net.id/community/media/visual/2019/12/11/13f62c9b-a3d1-4f8d-9942-13623ae9b7e6.png?d=1"
                  />
                  <img
                    height="80px"
                    align="right"
                    width="75%"
                    src="https://tpc.googlesyndication.com/simgad/17942673534534995472"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="navbar-fixed">
          <div>
            <nav className=" #c62828 blue darken-3">
              <div class="container">
                <a href="#" class="brand-logo">
                  News
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                    <a href="sass.html">Home</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
