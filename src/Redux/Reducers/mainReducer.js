

// Part 1: Step 1 - Shape of state

const initialState = {
  counter: 0,
  text: 'default',
}


// counter_incremented
// counter_decremented
// text_changed


const mainReducer = (state, action) => {

  switch (action.type) {
    
    case 'counter_incremented':
      return {
        ...state,
        counter: state.counter + 1,
      }

    case 'counter_decremented':
      return {
        ...state,
        counter: state.counter - 1,
      }
      
      default:
        return initialState;
    }
  }


export default mainReducer;



