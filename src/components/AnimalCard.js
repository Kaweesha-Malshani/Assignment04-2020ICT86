import React from "react";
import "../styles/Game.css";
//import animals from "../data/AnimalsDb";

const AnimalCard = ({ animal, onClick }) => {
  return (
    <div className="animal-card" onClick={onClick}>
      <img src={`/images/${animal.image}`} alt={animal.name} className="animal-image" />
    </div>
  );
};

export default AnimalCard;

