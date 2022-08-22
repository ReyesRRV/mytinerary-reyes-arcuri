import React from 'react'
import '../styles/Carusel.css'

const range= 4
const start= 0
const end= start + range




export default function Carrousel() {
    const items =[
        {url:"/img/Carousel/33-Uruguay.jpg", title:"Thirty-three - Uruguay"},
        {url:"/img/Carousel/angels-USA.jpg", title:"The angels-USA"},
        {url:"/img/Carousel/blackriver-Argentina.jpg", title:"Black River - Argentina"},
        {url:"/img/Carousel/DaisyFlower-Venezuela.jpg", title:"DaisyFlower island - Venezuela"},
        {url:"/img/Carousel/goodAirs-Argentina.jpg", title:"Good Airs - Argentina"},
        {url:"/img/Carousel/hotwater-mexico.jpg", title:"Hotwater - Mexico"},
        {url:"/img/Carousel/jump-Argentina.jpg", title:"Jump - Argentina"},
        {url:"/img/Carousel/montevideo_grande.jpg", title:"Herbvideo - Uruguay"},
        {url:"/img/Carousel/portCross-Venezuela.jpg", title:"Portcross - Venezuela"},
        {url:"/img/Carousel/stream-Argentina.jpg", title:"Stream - Argentina"},
        {url:"/img/Carousel/thePeace-Mexico.jpg", title:"The Peace - Mexico"},
        {url:"/img/Carousel/TheSilver-Argentina.jpg", title:"The Silver - Argentina"},
        {url:"/img/Carousel/VineyardFromSea-Chile.jpg", title:"Vineyard from Sea - Chile"},
        ]
    
    
    
    const itemView = item =>(
            <div className="item">
                <p>{item.title}</p>
                <img src={item.url} />
            </div>
    )

  return (
    <div className='carousel'>
        <div className='slide'>
            {items.slice(start, end).map(itemView)}
        </div>
    </div>
  )
}
