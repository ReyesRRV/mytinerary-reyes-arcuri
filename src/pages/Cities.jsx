import React from 'react'
import '../styles/Cities.css'
import { Link as LinkRouter } from "react-router-dom"
import Footer2 from '../components/Footer2';
import Header from '../components/Header';

export default function Cities(props) {
    const items = [
        { url: "/img/Carousel/33-Uruguay.jpg", title: "Thirty-three - Uruguay" },
        {
          url: "/img/Carousel/blackriver-Argentina.jpg",
          title: "Black River - Argentina",
        },
        {
          url: "/img/Carousel/landFire.jpg",
          title: "Land of Fire - Argentina",
        },
        {
          url: "/img/Carousel/goodAirs-Argentina.jpg",
          title: "Good Airs - Argentina",
        },
        { url: "/img/Carousel/hotwater-mexico.jpg", title: "Hotwater - Mexico" },
        { url: "/img/Carousel/jump-Argentina.jpg", title: "Jump - Argentina" },
        {
          url: "/img/Carousel/montevideo_grande.jpg",
          title: "Hillvideo - Uruguay",
        },
        {
          url: "/img/Carousel/portCross-Venezuela.jpg",
          title: "Portcross - Venezuela",
        },
        { url: "/img/Carousel/stream-Argentina.jpg", title: "Stream - Argentina" },
        { url: "/img/Carousel/thePeace-Mexico.jpg", title: "The Peace - Mexico" },
        {
          url: "/img/Carousel/TheSilver-Argentina.jpg",
          title: "The Silver - Argentina",
        },
        {
          url: "/img/Carousel/VineyardFromSea-Chile.jpg",
          title: "Vineyard from Sea - Chile",
        },
      ];
    const range = 12
    const start = 0
    const end = start + range

    const itemView = (item) =>(
      
        <div className='citieItem'>
            <img src={item.url}/>
            <a href="">{item.title}</a>
            {/* <LinkRouter to={linkTo} className="boton-init">{item.tittle}</LinkRouter> */}
        </div>
    )

  return (
    <>
    <Header/>
    <div className='containerCit'>
    <video className='videoCarousel' src="/Welcome2.mp4" autoplay="true" muted="true" loop="true" >
      </video>
      <div className='slideCitie'>
          {items.slice(start, end).map(itemView)}
      </div>
    </div>
    <Footer2/>
    </>
  )
}

