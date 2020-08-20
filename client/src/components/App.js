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
    ],
    selectedDog: {},
  };

  render() {
    return (
      <>
        <div>App Component</div>
        <DogList dogs={this.props.dogs} />
      </>
    );
  }
}

export default App;
