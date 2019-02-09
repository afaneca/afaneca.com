import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import reducers from "./reducers";
import { Provider } from "react-redux"; 
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  componentWillMount() {
    document.title = 'António Faneca - Engenheiro Informático';
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
      
    );
  }
}

export default App;
