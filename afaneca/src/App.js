import React, { Component } from 'react';
import LandingPage from './screens/LandingPage';
import Resume from './screens/Resume';
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };
  }


  componentWillMount() {
    document.title = 'António Faneca - Software Engineer';
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
