import React from 'react'
import '../styles/Cities.css'
import { Link as LinkRouter } from "react-router-dom"
import Footer2 from '../components/Footer2';
import ScrollToTop from '../components/ScrollToTop';
import Formulario from '../components/Formulario';

export default function Cities(props) {
    const items = [
        { url: "/img/Carousel/33-Uruguay.jpg", title: "Thirty-three - Uruguay", _id:"1" },
        {
          url: "/img/Carousel/blackriver-Argentina.jpg",
          title: "Black River - Argentina",_id:"2"
        },
        {
          url: "/img/Carousel/landFire.jpg",
          title: "Land of Fire - Argentina",_id:"3"
        },
        {
          url: "/img/Carousel/goodAirs-Argentina.jpg",
          title: "Good Airs - Argentina",_id:"4"
        },
        { url: "/img/Carousel/hotwater-mexico.jpg", title: "Hotwater - Mexico",_id:"5" },
        { url: "/img/Carousel/jump-Argentina.jpg", title: "Jump - Argentina", _id:"6"},
        {
          url: "/img/Carousel/montevideo_grande.jpg",
          title: "Hillvideo - Uruguay",_id:"7"
        },
        {
          url: "/img/Carousel/portCross-Venezuela.jpg",
          title: "Portcross - Venezuela",_id:"8"
        },
        { url: "/img/Carousel/stream-Argentina.jpg", title: "Stream - Argentina",_id:"9" },
        { url: "/img/Carousel/thePeace-Mexico.jpg", title: "The Peace - Mexico",_id:"10" },
        {
          url: "/img/Carousel/TheSilver-Argentina.jpg",
          title: "The Silver - Argentina",_id:"11"
        },
        {
          url: "/img/Carousel/VineyardFromSea-Chile.jpg",
          title: "Vineyard from Sea - Chile",_id:"12"
        },
      ];
    const range = 12
    const start = 0
    const end = start + range

    const itemView = (item) =>(
      
        <div className='citieItem' key={item.title}>
            <img src={item.url}/>
            <LinkRouter className="city" to={item._id}>
              <a href="">{item.title}</a>
            </LinkRouter>
        </div>
    )

  return (
    <>
    <div className='containerCit'>
    <video className='videoCarousel' src="/Welcome2.mp4" autoPlay muted loop >
      </video>
      <div  className='slideCitie'>
          {items.slice(start, end).map(itemView)}
      </div>
    </div>
    <ScrollToTop/>
    <Footer2/>
    </>
  )
}

