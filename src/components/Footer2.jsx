import React from "react";
import "../styles/Footer2.css";
import CallToAction from "../components/Hero";
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

export default function Footer2() {
  let buttonText = "Back To Up!";
  let thisYear = new Date().getFullYear();
  return (
    <div className="footer2-container">
      <div className="redes">
        <a href="https://www.facebook.com/">
          <img src="/img/social/facebook.svg" alt="" />
        </a>
        <a href="#">
          <img src="/img/social/instagram.svg" alt="" />
        </a>
        <a href="#">
          <img src="/img/social/linkedin.svg" alt="" />
        </a>
        <a href="#">
          <img src="/img/social/twitter.svg" alt="" />
        </a>
      </div>
      <ul className="navFooter">

      <li > {linksNav.map(linkPage)}</li>
      </ul>
      <p className="hover-1">TrollTeam || COHORT 32</p>
      <p className="date"> {thisYear} </p>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Go top
      </button>
    </div>
  );
}
