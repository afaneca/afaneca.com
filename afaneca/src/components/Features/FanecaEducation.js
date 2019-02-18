import React, { Component } from 'react'
import FanecaEducationItem from './FanecaEducationItem'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getLocalizedString } from "../../actions";
import * as strTypes from "../../locale/locale_strings";

class FanecaEducation extends Component {
  static propTypes = {
    string: PropTypes.string,
    getLocalizedString: PropTypes.func,
  }

  constructor(props) {
    super(props)

    

    /* LOCALE */
    this._getLocalizedString(strTypes.STRING_EDUCATION_ISEC_DESCRIPTION);
    this._getLocalizedString(strTypes.STRING_EDUCATION_ISEC_DEGREE);
    this._getLocalizedString(strTypes.STRING_EDUCATION_TITLE);
  }

  componentDidUpdate() {
    /* LOCALE */
    this._getLocalizedString(strTypes.STRING_EDUCATION_ISEC_DESCRIPTION);
    this._getLocalizedString(strTypes.STRING_EDUCATION_ISEC_DEGREE);
    this._getLocalizedString(strTypes.STRING_EDUCATION_TITLE);
  }

  _getLocalizedString(type) {
    const { getLocalizedString } = this.props;

    getLocalizedString(type);
  }

  render(){
    return (
      <div>
        <h2>{this.props[strTypes.STRING_EDUCATION_TITLE]}</h2>
        <FanecaEducationItem
          institution="INSTITUTO SUPERIOR DE ENGENHARIA DE COIMBRA"
          location="COIMBRA"
          degree={this.props[strTypes.STRING_EDUCATION_ISEC_DEGREE]}
          dateStart="09/2015"
          dateEnd="03/2019"
        >
          {this.props[strTypes.STRING_EDUCATION_ISEC_DESCRIPTION]}
        </FanecaEducationItem>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    [strTypes.STRING_EDUCATION_TITLE]: state.locale[strTypes.STRING_EDUCATION_TITLE],
    [strTypes.STRING_EDUCATION_ISEC_DEGREE]: state.locale[strTypes.STRING_EDUCATION_ISEC_DEGREE],
    [strTypes.STRING_EDUCATION_ISEC_DESCRIPTION]: state.locale[strTypes.STRING_EDUCATION_ISEC_DESCRIPTION],
  };
};

export default connect(
  mapStateToProps,
  { getLocalizedString }
)(FanecaEducation);
