import React from 'react'
import UseForm from './hook/UseForm'
import '../styles/Formulario.css'



export default function Formulario() {
  const items =[
    {value: "City", type: "text", placeholder:"Example: Berlin"},
    {value: "County", type: "text",placeholder:"Example: Germany"},
    {value: "Photo", type: "text",placeholder:"Insert URL"},
    {value: "Population",type: "number",placeholder:"Approximate Number"},
    {value: "Fundation",type: "date",placeholder:"Example: 13/01/01"},
    {value: "Details",type: "text",placeholder:"Description"},
  ]
  
  return (
    <div className='containerFrom'>
      <h1>Form New City</h1>
      <form className='formNewCity' action="">
        <UseForm data={items} />
        <button id='send' type='summit' className='buttonInp'>Send City</button>
      </form>
    </div>
  )
}
