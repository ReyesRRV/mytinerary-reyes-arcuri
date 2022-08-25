import React from "react";
import Carrousel from "../components/Carrousel";
import EventCarousel from "../components/Places";
import Header from "../components/Header";
import Footer2 from '../components/Footer2'

export default function Home() {
  return (
    <div>
      <Header />
      <EventCarousel />
      <Footer2/>
    </div>
  );
}
