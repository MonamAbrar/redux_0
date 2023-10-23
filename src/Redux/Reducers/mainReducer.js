

// Step 1 - Shape of state

const initialState = {
  counter: 0,
  text: 'default',
}


// Step 2 - Determining how our state will change (actions)

// counter_incremented
// counter_decremented
// text_changed


// Step 3 - Writing reducers that will change the state based on the actions
// Note: Reducer gets the current state and your action, and must return the new state
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

    case 'text_changed':
      return {
        ...state,
        text: action.payload.text,
      }
      
    default:
      return initialState;
    }
  }




export default mainReducer;



