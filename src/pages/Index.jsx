import React from "react";
import Carrousel from "../components/Carrousel";
import EventCarousel from "../components/Places";
import Header from "../components/Header";
import Footer2 from '../components/Footer2'
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <>
    <div>
      {/* <Header/> */}
      <Welcome/>
      <EventCarousel/>
      <Footer2/>
    </div>
    </>
  );
}
