import React from 'react'


const range=4
const start=0
const end= start + range




export default function Carrousel() {
    const items =[
        {url:"", title:"asd1"},
        {url:"", title:"asd2"},
        {url:"", title:"asd3"},
        {url:"", title:"asd4"},
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
