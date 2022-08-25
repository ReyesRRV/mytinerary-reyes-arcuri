import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import ReactDOM from "react-dom/client";
import { useState } from "react";






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
            <a href="/Welcome">
              <img src="/img/MyTineraryLogo.png" alt="" />{" "}
            </a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Cities">Cities</a>
              </li>
              <li>
                <a href="*">New city </a>
              </li>
              <div className="user">
                <a href="/User">
                  <img src="/img/usuario.png" alt="" />{" "}
                </a>
              </div>
            </ul>
          </div>
          <span className="navTrigger" onClick={ToggleSwitch} >
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
