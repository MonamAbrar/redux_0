import { connect } from "react-redux";

import React from "react";

class DisplayComponent extends React.Component {

  render(props) {
    
    return (
      <>
        <p>Display Component</p>
        <p>{`Counter: ${this.props.counter}`}</p>
        <p>{`Text: ${this.props.text}`}</p>
      </>
    );

  }

}


const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    text: state.text
  }
}

// Step 6 - connect components as needed
export default connect(mapStateToProps)(DisplayComponent);