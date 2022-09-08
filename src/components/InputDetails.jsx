import { useNavigate } from 'react-router-dom'
import '../styles/inputDetails.css'

function InputDetails(props){
    const allCard = props.data

    let navigate = useNavigate()
 

    const card =(item) =>(
     <div class="card CardCity-container">
         <img src={item.photo} className="CardCity-img img-mobile" />
        <div class="card-info">
        <p className="text-title">{item.city} - {item.country}</p>
        <p className="CardCity-country">Description: {item.description}</p>
        </div>
        <p className='cardCity-population'>Population: {item.population}</p>
        <p className='cardCity-fundation'>Fundation: {new Date(item.fundation).getFullYear() } </p>
        <div class="card-footer">
        <div class="card-button">
        <button className='close-button' onClick={() => navigate(-1)} >Go back papu 😎 </button>
        </div>
      </div></div>

    )

    return(
        <div className='city-Container-center'>
           {card(allCard)}
        </div>
    )
}

export default InputDetails