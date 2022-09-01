import React from 'react'
import '../styles/UnderConstruction.css'
import Header from '../components/Header'
import Footer2 from '../components/Footer2'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Formulario from '../components/Formulario';

export default function UnderConstriction() {
  let buttonText= "Back"
  const navigate = useNavigate();
  return (
    
    <>

    <div>
    <video className='videoCarousel' src="/Welcome2.mp4" autoPlay muted loop >
      </video>
      <div className='contenedorUnder'>
        <h3>Page not found or under construction! 😔</h3>
        <h4>PRESS THE TROLL AND GO BACK 😊</h4>
        <button className='buttonBack' onClick={() => navigate(-1)}><img src="/img/underConstruction.png" alt="under construction" /></button>
        
      </div>
      </div>
      {/* <Formulario/> */}
      <Footer2/>
    </>
  )
}
