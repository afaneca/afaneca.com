import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import FanecaFooter from './components/FanecaFooter'
import FanecaSkillSet from './components/Features/FanecaSkillSet'
import FanecaExperience from './components/Features/FanecaExperience'
import FanecaEducation from './components/Features/FanecaEducation'
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Row, Col } from 'react-materialize'


const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }


  componentWillMount() {
    document.title = 'António Faneca - Engenheiro Informático';
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <Provider store={store}>
        <div className="App">
          <div className="Home">
            <Home />
          </div>
          <div className="features-bg">
            <div className="features-wrapper">
              {isDesktop ? (
                <Row>
                  <Col s={6}>
                    <FanecaSkillSet />
                  </Col>
                  <Col s={6}>
                    <div>
                      <FanecaExperience />
                      <FanecaEducation />
                    </div>

                  </Col>
                </Row>
              ) : (
                  <div>
                    <FanecaSkillSet />
                    <FanecaExperience />
                    <FanecaEducation />
                  </div>
                )
              }

            </div>
          </div>
          <div className="footer">
            <FanecaFooter />
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
