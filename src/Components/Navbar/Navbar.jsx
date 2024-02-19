import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../Images/Logo.png";
import icon from "../Images/Icon.png";
import icon1 from "../Images/Icon (1).png";
import icon2 from "../Images/Icon (2).png";
import Insta from "../Images/instagram.png";
import Fb from "../Images/facebook.png";
import Twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";

const Navbar = () => {
  return (
    <div>
      <div className="Main-Nav1">
        <div className="Main-Nav2">
          <div className="logo-div">
            <img src={Logo} alt="" />
          </div>

          <div className="icons-div">
            <div className="icon-div">
              <img className="icon" src={icon} alt="" />
              <div className="icon-sub-div">
                <span>Mon-Sat 9.00-18.00</span>
                <span>Sunday Closed</span>
              </div>
            </div>

            <div className="icon-div">
              <img className="icon" src={icon1} alt="" />
              <div className="icon-sub-div">
                <span>Email</span>
                <span>contact@logistics.com</span>
              </div>
            </div>

            <div className="icon-div">
              <img className="icon" src={icon2} alt="" />
              <div className="icon-sub-div">
                <span>Call Us</span>
                <span>(00) 112 365 489</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Sub-Nav">
        <div className="Sub-Nav1">
          <div className="menu-div">
            <div className="sub-menu-div">
              <div className="Home-div">
                <span>Home</span>
              </div>
              <div className="Home-div">
                <span>About</span>
              </div>
              <div className="Home-div">
                <span>Pages</span>
              </div>
              <div className="Home-div">
                <span>Project</span>
              </div>
              <div className="Home-div1">
                <span>Contact</span>
              </div>
            </div>
          </div>

          <div className="Content-div">
            <div className="Content-sub-div1">
              <img className="insta" src={Insta} alt="" />
              <img className="insta" src={Fb} alt="" />
              <img className="insta" src={Twitter} alt="" />
              <img className="insta" src={linkedin} alt="" />
            </div>

            <div className="Content-sub-div2">
              <button className="Req-Button">Request Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
