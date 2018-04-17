import React from "react";
import "./Character.css";

const Character = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.handleClickEvent(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Character;