import React, { useState, useEffect } from "react";
import animals from "../data/AnimalsDb";
import AnimalCard from "./AnimalCard";
import "../styles/Game.css";

const Game = () => {
  const [targetAnimal, setTargetAnimal] = useState("");
  const [message, setMessage] = useState("");
  const [shuffledAnimals, setShuffledAnimals] = useState([]);


  useEffect(() => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    setTargetAnimal(randomAnimal.name);
    setShuffledAnimals([...animals].sort(() => Math.random() - 0.5));
  }, []);

  
  const handleChoice = (animalName) => {
    if (animalName === targetAnimal) {
      setMessage("You Win!");
    } else {
      setMessage("You Lose!");
    }
  };

  return (
    <div className="game-container">
      <h1>Animal Matching Game</h1>
      <div className="instructions">
        Click the correct image for: <strong>{targetAnimal}</strong>
      </div>
      <div className="animal-grid">
        {shuffledAnimals.map((animal) => (
          <AnimalCard
            key={animal.name}
            animal={animal}
            onClick={() => handleChoice(animal.name)}
          />
        ))}
      </div>
      {message && <div className="result">{message}</div>}
    </div>
  );
};

export default Game;
