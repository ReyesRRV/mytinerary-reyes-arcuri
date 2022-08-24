import React from 'react'
import Carrousel from '../components/Carrousel';
import EventCarousel from '../components/Places'
import Header from '../components/Header';

export default function Home() {
  return (
    <div> 
      <Header/>
      <EventCarousel />
      <Carrousel />
    </div>
  )
}
