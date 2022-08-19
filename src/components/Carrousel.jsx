import React from 'react'
import '../styles/Carusel.css'

const range=4
const start=0
const end= start + range




export default function Carrousel() {
    const items =[
        {url:"/logo192.png", title:"asd1"},
        {url:"/logo192.png", title:"asd2"},
        {url:"/logo192.png", title:"asd3"},
        {url:"/logo192.png", title:"asd4"},
        ]
    
    
    
    const itemView = item =>(
            <div className="item">
                <img src={item.url} />
                <p>{item.title}</p>
            </div>
    )

  return (
    <div>
        <div className='slide'>
            {items.slice(start, end).map(itemView)}
        </div>
    </div>
  )
}
