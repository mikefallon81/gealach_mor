import React from "react";

const DogDetail = ({ selectedDog }) => {
  return (
    <div>
      <h3>{selectedDog.name}</h3>
      <h3>{selectedDog.dateOfBirth}</h3>
      <h3>{selectedDog.petPassportNo}</h3>
      <h3>{selectedDog.kennel}</h3>
    </div>
  );
};

export default DogDetail;
