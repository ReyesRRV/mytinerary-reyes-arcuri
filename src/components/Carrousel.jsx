import React from "react";
import "../styles/Carusel.css";
import Arrow from "./Arrow";
import Arrow2 from "./Arrow2";
import {useEffect, useState} from 'react'

export default function Carrousel(props) {
  const items = [
    { url: "/img/Carousel/33-Uruguay.jpg", title: "Thirty-three - Uruguay" },
    { url: "/img/Carousel/angels-USA.jpg", title: "The angels-USA" },
    {
      url: "/img/Carousel/blackriver-Argentina.jpg",
      title: "Black River - Argentina",
    },
    {
      url: "/img/Carousel/DaisyFlower-Venezuela.jpg",
      title: "DaisyFlower island - Venezuela",
    },
    {
      url: "/img/Carousel/goodAirs-Argentina.jpg",
      title: "Good Airs - Argentina",
    },
    { url: "/img/Carousel/hotwater-mexico.jpg", title: "Hotwater - Mexico" },
    { url: "/img/Carousel/jump-Argentina.jpg", title: "Jump - Argentina" },
    {
      url: "/img/Carousel/montevideo_grande.jpg",
      title: "Herbvideo - Uruguay",
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

  const range = 4
  const limitSlides = (props.slides * range)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const [intervalId, setIntervalId] = useState()
  const interval = props.interval * 1000

  
  const itemView = (item) => (
    <div className="item">
      <p>{item.title}</p>
      <img src={item.url} />
    </div>
  );
  function previous() {
    if (start >= range) {
        setStart(start-range)
        setEnd(end-range)
    } else {
        setStart(limitSlides-range)
        setEnd(limitSlides)
    }
}

function next() {
    if (start < limitSlides-range) {
        setStart(start+range)
        setEnd(end+range)
    } else {
        setStart(0)
        setEnd(range)
    }
}
  return (
    <div className="carousel">
        <Arrow icon={"<"} click={previous}/>
      <div className="slide">{items.slice(start, range).map(itemView)}</div>
        <Arrow2 icon={">"} click={next}/>
    </div>
  );
}
