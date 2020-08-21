import React from "react";
import "./DogItem.css";

const DogItem = ({ dog, onDogSelect }) => {
  console.log(dog.image);
  return (
    <div className="card_container">
      <div onClick={() => onDogSelect(dog)} className="ui card">
        <div className="image">
          <img alt="" src={require("../images/updated_logo.png")} />
        </div>
        <div className="content">
          <h3 className="header">{dog.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default DogItem;
