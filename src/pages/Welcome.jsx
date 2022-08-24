import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./Home"
import React from 'react'
import '../styles/Welcome.css'
import CallToAction from "../components/Hero";


export default function Welcome(props) {
  const buttonText = "Lets go!"
  return (
    <div className='container'>
      <video src="/Welcome2.mp4" autoplay="true" muted="true" loop="true" >
      </video>
      <div className='container-init'>
        <h1 className='titulo-init'>Welcome to <span className='title'>MyTinerary</span></h1>
        <h3>Will you travel?</h3>
        <CallToAction linkTo='Home' buttonText={buttonText}/>
        {props.childen}
    </div>
    </div>
    
  )
}
