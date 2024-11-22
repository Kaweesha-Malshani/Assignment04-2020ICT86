import React from "react";
import "../styles/Game.css";

const AnimalCard = ({ animal, onClick }) => {
  return (
    <div className="animal-card" onClick={onClick}>
      <img src={animal.image} alt={animal.name} className="animal-image" />
    </div>
  );
};

export default AnimalCard;

