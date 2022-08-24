import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import ReactDOM from 'react-dom/client';


export default function Header() {
  return (
    <>
      <nav className="nav">
        <div className="navcontainer">
          <div className="logo">
            <a href="/Welcome">
              <img src="/img/MyTineraryLogo.png" alt="" />{" "}
            </a>
          </div>
          <div id="mainListDiv" className="main_list show_list">
            <ul className="navlinks">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Cities</a>
              </li>
              <li>
                <a href="#">New city </a>
              </li>
            </ul>
          </div>
          <span class="navTrigger active" onClick={test}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </>
  );
}

window.scroll(function () {
  if (document.scrollTop() > 50) {
    document.getElementByClassName("nav").classList.add("affix");
    console.log("OK");
  } else {
    document.getElementByClassName("nav").classList.remove("affix");
  }
});

function test() {
//   this.classList.toggle("active");
// this.addActiveClass
  console.log("Clicked menu");
//   document.getElementById("mainListDiv").classList.toggle("show_list");
//   document.getElementById("mainListDiv").fadeIn();
};
