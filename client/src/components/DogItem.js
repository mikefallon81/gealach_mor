import React from "react";

const DogItem = ({ dog, onDogSelect }) => {
  return (
    <div onClick={() => onDogSelect(dog)} className="ui card">
      <div className="image">
        <img alt="" src="" />
      </div>
      <div className="content">
        <h3 className="header">{dog.name}</h3>
      </div>
    </div>
  );
};

export default DogItem;
