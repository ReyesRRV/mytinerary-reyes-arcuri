import React from "react";
import "../styles/Carusel.css";
import Arrow from "./Arrow";
import Arrow2 from "./Arrow2";
import { useEffect, useState } from "react";

 function Carousel(props) {
  let items = props.data;
  let range = props.range;
  let limitSlides = (props.slides * range);
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(start + range);
  let [intervalId, setIntervalId] = useState();
  let interval = props.interval * 1000;

  let itemView = (item) => (
    <div className="item">
      <p>{item.title}</p>
      <img src={item.url} />
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
    <div className="carousel">
      <Arrow icon={"<"} click={previous} />
      <div className="slide">{items.slice(start, end).map(itemView)}</div>
      <Arrow2 icon={">"} click={next} />
    </div>
  );
}

export default Carousel