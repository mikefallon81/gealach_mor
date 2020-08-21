import React from "react";
import DogList from "./DogList";
import DogDetail from "./DogDetails";

class App extends React.Component {
  state = {
    dogs: [
      {
        name: "Bushka",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
        image: "../images/updated_logo.png",
      },
      {
        name: "Hop",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
      },
      {
        name: "Harry",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
      },
      {
        name: "Kiz",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
      },
      {
        name: "Hagg",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
      },
      {
        name: "Cashe",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
      },
    ],
    selectedDog: {},
  };

  onDogSelect = (dog) => {
    this.setState({ selectedDog: dog });
  };

  render() {
    return (
      <>
        <div className="ui container row">
          {/* <Header /> */}
          {/* <Navigation/> */}
          <DogList onDogSelect={this.onDogSelect} dogs={this.state.dogs} />
          <DogDetail selectedDog={this.state.selectedDog} />
        </div>
      </>
    );
  }
}

export default App;
