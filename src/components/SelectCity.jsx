import React from "react";

export default function SelectCity(props) {
  const allCities = props.data;
  console.log(allCities);

  const itemView = (item) => (
    <option value={item.city}>{item.city}</option>
  )

  return (
    <>
      <select name="select">
        <option value="select">select a city for edit</option>
        {allCities.map(itemView)}
      </select>
    </>
  );
}
