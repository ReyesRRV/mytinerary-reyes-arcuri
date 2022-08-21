import React from 'react'
import '../styles/Carusel.css'

const range= 12
const start= 0
const end= start + range




export default function Carrousel() {
    const items =[
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        {url:"/img/Carousel/ciudad-test.jpg", title:"asd1"},
        ]
    
    
    
    const itemView = item =>(
            <div className="item">
                <p>{item.title}</p>
                <img src={item.url} />
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
