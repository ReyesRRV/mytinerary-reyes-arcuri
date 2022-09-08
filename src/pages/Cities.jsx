import React from "react";
import "../styles/Cities.css";
import { useAllQuery } from "../store/CitiesApi";
import { useRef, useState } from "react";
import CardCity from '../components/CardCity'
import Footer2 from '../components/Footer2'
import { useNavigate } from 'react-router-dom'

export default function Cities() {
  let navigate = useNavigate()
 
  const [search, setSearch] = useState();
  const searchInput = useRef("");
  const accion = () => {
    setSearch(searchInput.current.value);
    console.log(search)
  };

  const {
    data: items,
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useAllQuery(searchInput.current ? searchInput.current.value : "");
  console.log(items);

  if (isLoading) {
    console.log("Loading");
  } else if (isSuccess) {
    console.log("Load succesfully");
    
  } else if (isFailed) {
    console.log("3");
    items = [];
  }

  return(
    <div className="card-containter">
        <input onChange={accion}  ref={searchInput}  type="search" className="cities-search" placeholder="What wanna u see?." />
        
        <CardCity  data={items}  />
      <button className='close-button' onClick={() => navigate(-1)} >Go back papu 😎 </button>
        <Footer2 />
    </div>

)

}
