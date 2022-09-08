import {Link as LinkRouter} from 'react-router-dom'
import "../styles/Cities.css";

function CardCity(props){
    const allCard = props.data
    
  const itemView = (item) => (
    <div className="citieItem" key={item.city}>
      <img src={item.photo} />
      <LinkRouter className="city" to={`/cities/${item._id}`}>
        <p>{item.city}</p>
      </LinkRouter>
    </div>
  );


  return (
    <>
      <div className="containerCit">
        <video
          className="videoCarousel"
          src="/Welcome2.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="slideCitie">{allCard?.map(itemView)}</div>
      </div>
    </>
  );
}
export default CardCity