import Carousel from "./Carrousel";
import axios from "axios";
import { useEffect, useState } from "react";

function EventCarousel() {
  const [items, setItems] = useState([])
    
  useEffect(()=>{
    axios.get('http://localhost:4000/cities/')
    .then(response => setItems(response.data))

  },[])

  return console.log (items), <Carousel data={items} range={4} slides={3} interval={15} />;
}
export default EventCarousel;
