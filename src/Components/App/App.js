import React from 'react';

import MainComponent from '../MainComponent/MainComponent';

import { Provider } from 'react-redux';  // Step 5 - Import and provide the store to your app
import store from '../../Redux/store';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>  
          <MainComponent/>
        </Provider>
      </>
    );
  }
  
}

export default App;
