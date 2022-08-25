import React from 'react'
import '../styles/Footer2.css'
import CallToAction from '../components/Hero'

export default function Footer2() {
  let buttonText= "Back To Up!"
  return (
    <div className='footer2-container'>
      
      <div className='redes'>
        <a href="https://www.facebook.com/"><img src="/img/social/facebook.svg" alt="" /></a>
        <a href="#"><img src="/img/social/instagram.svg" alt="" /></a>
        <a href="#"><img src="/img/social/linkedin.svg" alt="" /></a>
        <a href="#"><img src="/img/social/twitter.svg" alt="" /></a>
      </div>
      <CallToAction linkTo='/' buttonText={buttonText}/>
      <p className='hover-1'>TrollTeam || COHORT 32</p>
      
    </div>
  )
}
