import React from "react";
import UseForm from "./UseForm";
import "../styles/Form.css";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import SelectCity from "./SelectCity";

export default function Form() {
  let Navigate = useNavigate();
  const items = [
    { value: "City: ", type: "text", placeholder: " Berlin" },
    { value: "County: ", type: "text", placeholder: " Germany" },
    { value: "Photo: ", type: "text", placeholder: "Insert URL" },
    {
      value: "Population: ",
      type: "number",
      placeholder: "Approximate Number",
    },
    { value: "Fundation: ", type: "date", placeholder: "13/01/01" },
    { value: "Details: ", type: "text", placeholder: "Description" },
  ];

 const Cities = [
    {
      "_id": "631067e010eaea526a924d9c",
      "city": "Thirty three",
      "photo": "https://i.pinimg.com/originals/b5/ca/d4/b5cad4a6c14ef65bd11bfb36f2cd1f84.jpg",
      "country": "Uruguay",
      "description": "A nice place with 4 bridges =)",
      "population": 25477,
      "fundation": "2023-10-05T00:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b66730c",
      "city": "Land of Fire",
      "photo": "/img/Carousel/landFire.jpg",
      "country": "Argentina",
      "description": " Nice place for buy horses =) ",
      "population": 25477,
      "fundation": "1990-10-05T00:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b66730d",
      "city": "Good Airs - Argentina",
      "photo": "/img/Carousel/goodAirs-Argentina.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b66730e",
      "city": "Hotwater - Mexico",
      "photo": "/img/Carousel/hotwater-mexico.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b66730f",
      "city": "Jump - Argentina",
      "photo": "/img/Carousel/jump-Argentina.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b66730b",
      "city": "Black River - Argentina",
      "photo": "/img/Carousel/blackriver-Argentina.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b667312",
      "city": "Stream - Argentina",
      "photo": "/img/Carousel/stream-Argentina.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b66730a",
      "city": "Thirty-three - Uruguay",
      "photo": "/img/Carousel/33-Uruguay.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b667314",
      "city": "The Silver - Argentina",
      "photo": "/img/Carousel/TheSilver-Argentina.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b667313",
      "city": "The Peace - Mexico",
      "photo": "/img/Carousel/thePeace-Mexico.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b667315",
      "city": "Vineyard from Sea - Chile",
      "photo": "/img/Carousel/VineyardFromSea-Chile.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b667310",
      "city": "Hillvideo - Uruguay",
      "photo": "/img/Carousel/montevideo_grande.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "63106b7af76cef0a0b667311",
      "city": "Portcross - Venezuela",
      "photo": "/img/Carousel/portCross-Venezuela.jpg",
      "country": " ",
      "description": " ",
      "__v": 0
    },
    {
      "_id": "6317734d87fa10b0c398c700",
      "city": "Thirty three test",
      "photo": "https://i.pinimg.com/originals/b5/ca/d4/b5cad4a6c14ef65bd11bfb36f2cd1f84.jpg",
      "country": "Uruguay",
      "description": "A nice place with 4 bridges =)",
      "population": 25477,
      "fundation": "1970-01-01T00:00:01.853Z",
      "__v": 0
    },
    {
      "_id": "6318106b229a669628978c2a",
      "city": "Comarca",
      "country": "Kingdom of Gondor",
      "photo": "https://i2-prod.mirror.co.uk/incoming/article3884411.ece/ALTERNATES/n615/NO-REUSE-MAIN-Paul-Grant.jpg",
      "population": 6969,
      "fundation": "2022-09-21T00:00:00.000Z",
      "description": "EHHHHHHHHHHHHHH",
      "__v": 0
    },
    {
      "_id": "63181178229a669628978c34",
      "city": "Prueba de modificación ^^ ",
      "country": "Argenzuela",
      "photo": "https://antiheroes.com.ar/wp-content/uploads/2021/12/otaku.jpg",
      "population": 4999,
      "fundation": "2022-09-16T00:00:00.000Z",
      "description": "🥣🥣🥣🥣🥣🥣",
      "__v": 0
    },
    {
      "_id": "63181288229a669628978c36",
      "city": "Hogwarts",
      "country": "England",
      "photo": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2016/07/landscape-1433777123-hogwarts-school-of-witchcraft-and-wizardry-harry-potter-movie-hd-wallpaper-1920x1080-4707.jpg?fit=1600%2C800&quality=50&strip=all&ssl=1",
      "population": 1111171,
      "fundation": "1250-09-23T00:00:00.000Z",
      "description": "A nice place for learn magic",
      "__v": 0
    }
  ]
  return (
    <div className="containerFrom">
      <h1>Edit City</h1>
      <form className="formNewCity" action="">
      <SelectCity data={Cities} />
        <UseForm data={items} />
        <div className="sendEdit">
          <button id="send" type="summit" className="buttonInp">
            Send City
          </button>
          <button className="EditCity" onClick={() => Navigate(-1)}>
            <img src="/img/cancel.png" alt="under construction" />
          </button>
        </div>
      </form>
    </div>
  );
}
