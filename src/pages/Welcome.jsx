import React from 'react'
import '../styles/Welcome.css'
import Home from './Home' 


export default function Welcome(props) {
  return (
    <div className='container-init'>
        <h1 className='titulo-init'>Welcome to <span className='title'>MyTinerary</span></h1>
        <h3>discover your next aventure</h3>
        <a href= "{Home}" className='boton-init'> Lest Go!</a>
        {props.childen}
    </div>
  )
}
