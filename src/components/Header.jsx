import React from "react";
import ReactDOM from "react-dom/client";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

const linksNav = [
  { name: "Home", to: "/"},
  { name: "Cities", to: "/cities"},
  { name: "New City", to: "/newcity"},
];

const linkPage = (page) => (
  <LinkRouter className="hRouter" key={page.name} to={page.to}>
    {page.name} 
  </LinkRouter>
);

export default function Header() {
  const [switchToggled, setSwitchToggled] = useState(false);
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
  };
  return (
    <>
      <nav className="nav">
        <div className="navcontainer">
          <div className="logo">
            <LinkRouter to="/">
              <img src="/img/MyTineraryLogo.png" alt="" />{" "}
            </LinkRouter>
          </div>
          <div
            id="mainListDiv"
            className={switchToggled ? "main_list show_list" : "main_list"}
            onClick={ToggleSwitch}>
            <ul className="navlinks">
              <li> {linksNav.map(linkPage)}
              
                <LinkRouter className="user" to="/User">
                  <img  src="/img/user.png" alt="User icon" />
                </LinkRouter>
              
              </li>
            </ul>
          </div>
          <span
            className={switchToggled ? "navTrigger active" : "navTrigger"}
            onClick={ToggleSwitch}
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </>
  );
}

