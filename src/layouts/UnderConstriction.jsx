import React from 'react'
import CallToAction from '../components/Hero'
import '../styles/UnderConstruction.css'
import Header from '../components/Header'
import Footer2 from '../components/Footer2'

export default function UnderConstriction() {
  let buttonText= "Back"
  return (
    <>
    <Header/>
    <div className='underContainer1'>
        <video className='videoCarousel' src="/Welcome2.mp4" autoplay="true" muted="true" loop="true" >
        </video>
        <div className='contenedorUnder'>
          <h4>Not fund or under contruction`s page!</h4>
          <CallToAction linkTo='/' buttonText={buttonText}/>
          <img src="/img/orcoConstruyendo2.png" alt="" />
        </div>
      <Footer2/>
      </div>
    </>
  )
}
