import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLocale } from "../actions";
import FanecaHeader from './FanecaHeader'
import FanecaFooter from './FanecaFooter'
import FanecaBio from './FanecaBio'
import SocialConnections from './SocialConnections'
import FanecaButtons from './FanecaButtons'
import FanecaLocale from './FanecaLocale'
import FanecaScrollDown from './FanecaScrollDown'

class Home extends Component {
  static propTypes = {
    setLocale: PropTypes.func,
    lang: PropTypes.string,
  }
  componentDidMount(){
    const { setLocale } = this.props;
    setLocale('en'); // sets the default locale
  }

  /* componentDidUpdate(){
    let lang = this.props.lang;
    debugger;
  } */

  render() {
    const { lang } = this.props;
    return (
      <div>
        <FanecaLocale locale={lang} />
        <FanecaHeader locale={lang} />
        <FanecaBio locale={lang} />
        <FanecaButtons locale={lang} />
        <SocialConnections locale={lang} />
        <FanecaScrollDown locale={lang} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lang: state.locale.lang,
  };
};

export default connect(mapStateToProps, { setLocale })(Home);