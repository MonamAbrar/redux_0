import { connect } from "react-redux";

import React from "react";

class TextModifier extends React.Component {

  render(props) {
    
    const changeHandler = (e) => {
      
      const actionObject = {
        type: 'text_changed',
        payload: {
          text: e.target.value,
        }
      };

      this.props.dispatch(actionObject);
    }

    return (
      <>
        <p>Text Modifier</p>
        <input type="text" value={this.props.text} onChange={changeHandler}></input>
      </>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}


export default connect(mapStateToProps)(TextModifier);