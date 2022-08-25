import React from 'react'
import CallToAction from '../components/Hero'
import '../styles/UnderConstruction.css'

export default function UnderConstriction() {
  let buttonText= "Back"
  return (
    <>
      <div className='contenedorUnder'>
        <h4>Not fund or under contruction`s page!</h4>
        <CallToAction linkTo='/' buttonText={buttonText}/>
      </div>
    </>
  )
}
