import React from "react";
import { CARLOGOS } from "../utils/constants";

function CarCardComponent(props: CARLOGOS) {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default CarCardComponent;
