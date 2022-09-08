import React from "react";
import "../styles/Carusel.css";
import Arrow from "./Arrow";
import Arrow2 from "./Arrow2";
import { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom"


 function Carousel(props) {
  let items = props.data;
  let range = props.range;
  let limitSlides = (props.slides * range);
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(start + range);
  let [intervalId, setIntervalId] = useState();
  let interval = props.interval * 1000;

  useEffect(() => {
    let id = setInterval(function () {
        next()
    }, interval)

    setIntervalId(id)

    return () => clearInterval(id)
}, [start])

  let itemView = (item) => (
    <div key={item.city}className="item">
      <p>{item.city}</p>
      <LinkRouter to= {`/cities/${item._id}`} >
      <img src={item.photo} />
            </LinkRouter>
    </div>
  );
  function previous() {
    if (start >= range) {
      setStart(start - range);
      setEnd(end - range);
    } else {
      setStart(limitSlides - range);
      setEnd(limitSlides);
    }
  }

  function next() {
    if (start < limitSlides - range) {
      setStart(start + range);
      setEnd(end + range);
    } else {
      setStart(0);
      setEnd(range);
    }
  }
  return (
    <>
    <div className="carrouselContainer">
        <div className="carousel" >
          <Arrow icon={<img src="/img/carousel/arrow_back_ios_FILL0_wght500_GRAD0_opsz48.png" alt="" />} click={previous} />
          <div className="slide">{items.slice(start, end).map(itemView)}</div>
          <Arrow2 icon={<img src="/img/carousel/arrow_forward_ios_FILL0_wght500_GRAD0_opsz48.png" alt="" />} click={next} />
        </div>
    </div>
    </>
  );
}

export default Carousel