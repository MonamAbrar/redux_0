import React from "react";

import DisplayComponent from "../DisplayComponent/DisplayComponent";
import CounterModifier from "../CounterModifier/CounterModifier";
import TextModifier from "../TextModifier/DisplayComponent";

class MainComponent extends React.Component {

  render() {
    return (
      <>
        <br></br>
        <DisplayComponent/>
        <br></br>
        <CounterModifier/>
        <br></br>
        <br></br>
        <TextModifier/>
      </>
    )
  }

}


export default MainComponent;