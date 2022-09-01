import React from "react";
import UseForm from "./hook/UseForm";
import "../styles/Form.css";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

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

  return (
    <div className="containerFrom">
      <h1>Edit City</h1>
      <form className="formNewCity" action="">
      <select name="select">
        <option value="select">select a city for edit</option>
        <option value="value1">33</option>
        <option value="value2">LandFire</option>
        <option value="value3">GoodAirs</option>
        <option value="value3">view more</option>
      </select>
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
