import React from "react";
import DogItem from "./DogItem";
import "./DogList.css";

const DogList = ({ dogs, onDogSelect }) => {
  const renderedList = dogs.map((dog) => {
    return <DogItem key={dog.name} dog={dog} onDogSelect={onDogSelect} />;
  });

  return <div className="renderedList">{renderedList}</div>;
};

export default DogList;
