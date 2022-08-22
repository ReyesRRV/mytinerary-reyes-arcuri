import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./Home"
import React from 'react'
import '../styles/Welcome.css'



export default function Welcome(props) {
  return (
    <div className='container'>
      <video src="/Welcome2.mp4" autoplay="true" muted="true" loop="true" >
      </video>
      <div className='container-init'>
        <h1 className='titulo-init'>Welcome to <span className='title'>MyTinerary</span></h1>
        <h3>Will you travel?</h3>
        <a href= "/Home" className='boton-init'> Lets Go!</a>
        {props.childen}
    </div>
    </div>
    
  )
}
