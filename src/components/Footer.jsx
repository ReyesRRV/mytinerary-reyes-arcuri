import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <>
    <div className='footer-container'>
      <p className='hover-1'>Richard Reyes - Martin Arcuri </p>
      <p className='hover-1'>Mindhub</p>
      <div className='redes'>
        <a href="https://www.facebook.com/"><img src="/redes/facebook.svg" alt="" /></a>
        <a href="#"><img src="/redes/instagram.svg" alt="" /></a>
        <a href="#"><img src="/redes/linkedin.svg" alt="" /></a>
        <a href="#"><img src="/redes/twitter.svg" alt="" /></a>
      </div>
    </div>
    </>
  )
}
