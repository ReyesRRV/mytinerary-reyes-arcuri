import React from 'react'
import '../styles/Cities.css'
import { Link as LinkRouter } from "react-router-dom"
import Footer2 from '../components/Footer2';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cities() {
  const [items, setItems] = useState([])
    
  useEffect(()=>{
    axios.get('http://localhost:4000/cities/')
    .then(response => setItems(response.data))

  },[])  

    const itemView = (item) =>(
        <div className='citieItem' key={item.city}>
            <img src={item.photo}/>
            <LinkRouter className="city" to= {`/Details/${item._id}`} >
              <a href="">{item.city}</a>
            </LinkRouter>
        </div>
    )
  return (
    <>
    <div className='containerCit'>
    <video className='videoCarousel' src="/Welcome2.mp4" autoPlay muted loop >
      </video>
      <div  className='slideCitie'>
          {items.map(itemView)}
      </div>
    </div>
    <Footer2/>
    </>
  )
}