import React, { Component } from 'react'
import '../App.css';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { setLocale } from "../actions";
import Home from '../components/Home';
import FanecaFooter from '../components/FanecaFooter'
import FanecaSkillSet from '../components/Features/FanecaSkillSet'
import FanecaExperience from '../components/Features/FanecaExperience'
import FanecaEducation from '../components/Features/FanecaEducation'
import reducers from "../reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Row, Col } from 'react-materialize'

class LandingPage extends Component {
    static propTypes = {
        setLocale: PropTypes.func,
        lang: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false //This is where I am having problems
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }


    componentDidMount() {
        const { setLocale } = this.props;
        setLocale('en'); // sets the default locale
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
        const { lang } = this.props;
        const { isDesktop } = this.state;

        return (
            <div className="App">
                <div className="Home">
                    <Home locale={lang} />
                </div>
                <div id="features" className="features-bg">
                    <div className="features-wrapper">
                        {isDesktop ? (
                            <Row>
                                <Col s={6}>
                                    <FanecaSkillSet locale={lang} />
                                </Col>
                                <Col s={6}>
                                    <div>
                                        <FanecaExperience locale={lang} />
                                        <FanecaEducation locale={lang} />
                                    </div>

                                </Col>
                            </Row>
                        ) : (
                                <div>
                                    <FanecaSkillSet locale={lang} />
                                    <FanecaExperience locale={lang} />
                                    <FanecaEducation locale={lang} />
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className="footer">
                    <FanecaFooter locale={lang} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.locale.lang,
    };
};

export default connect(mapStateToProps, { setLocale })(LandingPage);
