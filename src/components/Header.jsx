import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";





export default function Header() {
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    console.log(switchToggled)
  }
  return (
    <>
      <nav className="nav">
        <div className="navcontainer">
          <div className="logo">
            <LinkRouter to="/Welcome">
              <img src="/img/MyTineraryLogo.png" alt="" />{" "}
            </LinkRouter>
          </div>
          <div id="mainListDiv" className={ switchToggled ? "main_list show_list" : "main_list"} onClick={ToggleSwitch}>
            <ul className="navlinks">
              <li>
                <LinkRouter to="/">Home</LinkRouter>
              </li>
              <li>
                <LinkRouter to="/Cities">Cities</LinkRouter>
              </li>
              <li>
                <LinkRouter to="*">New city </LinkRouter>
              </li>
              <div className="user">
                <LinkRouter to="/User">
                  <img src="/img/user.png" alt="User icon" />
                </LinkRouter>
              </div>
            </ul>
          </div>
          <span className={ switchToggled ? "navTrigger active" : "navTrigger"} onClick={ToggleSwitch} >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </>
  );
}


function Clicked (){
  
  //   this.classList.toggle("active");
  // this.addActiveClass
  console.log("Clicked menu");
  //   document.getElementById("mainListDiv").classList.toggle("show_list");
  //   document.getElementById("mainListDiv").fadeIn();
  


    
  }






















// window.scroll(function () {
//   if (document.scrollTop() > 50) {
//     document.getElementByClassName("nav").classList.add("affix");
//     console.log("OK");
//   } else {
//     document.getElementByClassName("nav").classList.remove("affix");
//   }
// });

function test() {
  //   this.classList.toggle("active");
  // this.addActiveClass
  console.log("Clicked menu");
  //   document.getElementById("mainListDiv").classList.toggle("show_list");
  //   document.getElementById("mainListDiv").fadeIn();
}
