import Carousel from "./Carrousel";
import { useCarouselQuery } from "../store/CarouselApi";

function EventCarousel() {
  
  let {data : items} = useCarouselQuery()
  
  return (

    console.log (items), <Carousel data={items} range={4} slides={3} interval={15} />
    )
}
export default EventCarousel;
