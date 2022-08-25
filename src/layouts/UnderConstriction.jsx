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
      <div className='contenedorUnder'>
        <h4>Not fund or under contruction`s page!</h4>
        <CallToAction linkTo='/' buttonText={buttonText}/>
      </div>
      <Footer2/>
    </>
  )
}
