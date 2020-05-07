import React, { Component } from "react";

class FooterBar extends Component {
  render() {
    return (
      <div>
        <footer class="container-fluid">
          <div
            class="row justify-content-center"
            style={{
              backgroundColor: "#19345E",
              marginTop: "100px",
              paddingBottom: "42px",
            }}
          >
            <div
              class="col-lg-5 d-flex justify-content-center"
              style={{ marginTop: "60px" }}
            >
              <img
                class="logo-footer logo-awal"
                src={require("../images/twitter.png")}
              />
            </div>
            <div
              class="col-lg-4 d-flex justify-content-center"
              style={{ paddingTop: "44px" }}
            >
              <ul class="row" id="logo-sosmed">
                {" "}
                <span
                  style={{
                    color: "white",
                    fontSize: "14px",
                    marginTop: "20px",
                  }}
                >
                  Social Media
                </span>
                <li class="col-lg-12 justify-content-center">
                  {" "}
                  <a href="https://facebook.com">
                    <img
                      class="logo"
                      src={require("../images/facebook.png")}
                      style={{ marginRight: "10px" }}
                    />
                  </a>{" "}
                  <a href="https://twitter.com">
                    <img
                      class="logo"
                      src={require("../images/twitter.png")}
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                  <a href="https://instagram.com">
                    <img
                      class="logo"
                      src={require("../images/instagram.png")}
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3" style={{ marginTop: "30px" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  textAlign: "center",
                  paddingTop: "63px",
                }}
              >
                {" "}
                Copyright &copy; 2020 Ramadhan
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footerbar;
