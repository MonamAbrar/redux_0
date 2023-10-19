import { connect } from "react-redux";

import React from "react";

class DisplayComponent extends React.Component {

  render(props) {
    
    return (
      <>
        <p>Display Component</p>
        <p>{`Counter: ${this.props.counter}`}</p>
      </>
    );

  }

}



const mapStateToProps = (state) => ({ counter: state.counter })

export default connect(mapStateToProps)(DisplayComponent);