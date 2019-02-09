import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getLocalizedString } from "../actions";
import * as strTypes from "../locale/locale_strings";

class FanecaBio extends Component {
  static propTypes = {
    string: PropTypes.string,
    getLocalizedString: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      STR_OCCUPATION: "...",
    }

    /* LOCALE */
    this._getLocalizedString(strTypes.STRING_BIO);
  }

  componentDidUpdate() {
    /* LOCALE */
    this._getLocalizedString(strTypes.STRING_BIO);
  }

  _getLocalizedString(type) {
    const { getLocalizedString } = this.props;

    getLocalizedString(type);
  }


  render() {
    return (
      <div>
        <p style={styles.bioText}>{this.props[strTypes.STRING_BIO]}</p>
      </div>
    )
  }

}

const styles = {
  bioText: {
    fontSize: '2vh',
    padding: '2vh',
  },
}

const mapStateToProps = state => {
  return {
    [strTypes.STRING_BIO]: state.locale[strTypes.STRING_BIO],
  };
};

export default connect(
  mapStateToProps,
  { getLocalizedString }
)(FanecaBio);