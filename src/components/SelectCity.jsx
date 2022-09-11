import React from "react";

export default function SelectCity(props) {
  const allCities = props.data;
  console.log(allCities);

  const itemView = (item) => (
    <option value={item.city}>{item.city} - {item.country}</option>
  )

  return (
    <>
      <select name="select">
        <option value="selectACity" hidden >select a city for edit</option>
        {allCities.map(itemView)}
      </select>
    </>
  );
}
