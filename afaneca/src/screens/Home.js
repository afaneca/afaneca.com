import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLocale } from "../actions";
import FanecaHeader from '../components/FanecaHeader'
import FanecaFooter from '../components/FanecaFooter'
import FanecaBio from '../components/FanecaBio'
import SocialConnections from '../components/SocialConnections'
import FanecaButtons from '../components/FanecaButtons'
import FanecaLocale from '../components/FanecaLocale'

class Home extends Component {
  static propTypes = {
    setLocale: PropTypes.func,
    lang: PropTypes.string,
  }
  componentDidMount(){
    const { setLocale } = this.props;
    setLocale('en'); // sets the default locale
  }

 /*  componentDidUpdate(){
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
        <FanecaFooter locale={lang} />
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