import React, { Component } from 'react';
import LandingPage from './screens/LandingPage';
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };
  }


  componentWillMount() {
    document.title = 'António Faneca - Engenheiro Informático';
  }

  render() {
    return (
      <Provider store={store}>
        <LandingPage />
      </Provider>

    );
  }
}

export default App;
