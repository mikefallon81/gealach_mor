import React from "react";
import DogList from "./DogList";

class App extends React.Component {
  state = {
    dogs: [
      {
        name: "Bushka",
        kennel: "Gealachmor",
        dateOfBirth: "01/01/2010",
        petPassportNo: 123456789,
      },
      {
        name: "Hop",
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
        <div className="ui container">
          {/* <Header /> */}
          {/* <Navigation/> */}
          <DogList onDogSelect={this.onDogSelect} dogs={this.state.dogs} />
        </div>
      </>
    );
  }
}

export default App;
