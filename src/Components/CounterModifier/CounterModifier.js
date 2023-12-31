import { connect } from "react-redux";

import React from "react";

class CounterModifier extends React.Component {

  render(props) {

    const decrementHandler = () => {
      const actionObject = {type: 'counter_decremented'};
      this.props.dispatch(actionObject);
    }

    const incrementHandler = () => {
      const actionObject = {type: 'counter_incremented'};
      this.props.dispatch(actionObject);
    }
    
    return (
      <>
        <p>Counter Modifier</p>
        <button onClick={decrementHandler}>{'<'}</button>
        <button onClick={incrementHandler}>{'>'}</button>
      </>
    );

  }

}

// Step 6 - connect components as needed
export default connect()(CounterModifier);