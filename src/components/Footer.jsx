import React from "react";
import "../css/footer.css";

const FooterBar = () => {
  return (
    <div class="container-fluid">
      <div
        id="shadow-box-footer"
        className="rounded-top p-5"
        style={{
          backgroundColor: "white",
          borderColor: "black",
        }}
      >
        <div class="row">
          <div class="col-4 d-flex justify-content-center">
            <img
              class="logo-footer"
              src={require("../images/kareem.jpg")}
              alt="logoawal"
            />
          </div>
          <div class="col-4 d-flex justify-content-center">
            <table>
              <tr>
                <td>
                  <span className="text-primary foot-text">Social Media</span>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://facebook.com">
                    <i class="fab fa-facebook-square icon"></i>
                    <span className="name-icon">facebook</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://twitter.com">
                    <i class="fab fa-twitter icon"></i>
                    <span className="name-icon">@twitter</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://instagram.com">
                    <i class="fab fa-instagram icon"></i>
                    <span className="name-icon">@instagram</span>
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <p className="text-primary foot-text">
              {" "}
              Copyright &copy; 2020 Ramadhan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
