import React from 'react'
import UseForm from './hook/UseForm'
import '../styles/Form.css'
import { Link as LinkRouter } from "react-router-dom";



export default function Form() {
  const items =[
    {value: "City: ", type: "text", placeholder:" Berlin"},
    {value: "County: ", type: "text",placeholder:" Germany"},
    {value: "Photo: ", type: "text",placeholder:"Insert URL"},
    {value: "Population: ",type: "number",placeholder:"Approximate Number"},
    {value: "Fundation: ",type:"date",placeholder:"13/01/01"},
    {value: "Details: ",type: "text",placeholder:"Description"},
  ]
  
  return (
    <div className='containerFrom'>
      <h1>New City</h1>
      <form className='formNewCity' action="">
        <UseForm data={items} />
        <div className='sendEdit'>
        <button id='send' type='summit' className='buttonInp'>Send City</button>
        <LinkRouter className="EditCity" to="/EditCity"><img  src="/img/edit.png" alt="EditCity icon" />
                </LinkRouter>
        </div>
      </form>
    </div>
  )
}
