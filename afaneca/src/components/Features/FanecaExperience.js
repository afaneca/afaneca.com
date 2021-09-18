import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getLocalizedString } from "../../actions";
import * as strTypes from "../../locale/locale_strings";
import FanecaExperienceItem from './FanecaExperienceItem'

class FanecaExperience extends Component {
  static propTypes = {
    string: PropTypes.string,
    getLocalizedString: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      STR_EXPERIENCE_TITLE: "...",
      STR_EXPERIENCE_ENSO: "...",
      STR_EXPERIENCE_REMOTE: "..."
    }

    /* LOCALE */
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_TITLE);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_ENSO);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_REMOTE);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_ENSO_ROLE);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_ITSECTOR);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_IT_CONSULTANT);
  }

  componentDidUpdate() {
    /* LOCALE */
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_TITLE);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_ENSO);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_REMOTE);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_ENSO_ROLE);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_ITSECTOR);
    this._getLocalizedString(strTypes.STRING_EXPERIENCE_IT_CONSULTANT);
  }

  _getLocalizedString(type) {
    const { getLocalizedString } = this.props;

    getLocalizedString(type);
  }

  render() {
    return (
      <div>
        <h2>{this.props[strTypes.STRING_EXPERIENCE_TITLE]}</h2>
        <FanecaExperienceItem
          company="ITSector"
          location="Aveiro"
          role={this.props[strTypes.STRING_EXPERIENCE_IT_CONSULTANT]}
          dateStart="04/2019"
          dateEnd="?"
        >
          {this.props[strTypes.STRING_EXPERIENCE_ITSECTOR]}
        </FanecaExperienceItem>
        <FanecaExperienceItem
          company="ENSO ORIGINS"
          location="Coimbra"
          role={this.props[strTypes.STRING_EXPERIENCE_ENSO_ROLE]}
          dateStart="09/2018"
          dateEnd="03/2019"
        >
          {this.props[strTypes.STRING_EXPERIENCE_ENSO]}
        </FanecaExperienceItem>
        <FanecaExperienceItem
          company="FREELANCING"
          location="Remote"
          dateStart="04/2011"
          dateEnd="03/2017"
        >
          {this.props[strTypes.STRING_EXPERIENCE_REMOTE]}
        </FanecaExperienceItem>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    [strTypes.STRING_EXPERIENCE_TITLE]: state.locale[strTypes.STRING_EXPERIENCE_TITLE],
    [strTypes.STRING_EXPERIENCE_ENSO]: state.locale[strTypes.STRING_EXPERIENCE_ENSO],
    [strTypes.STRING_EXPERIENCE_REMOTE]: state.locale[strTypes.STRING_EXPERIENCE_REMOTE],
    [strTypes.STRING_EXPERIENCE_ENSO_ROLE]: state.locale[strTypes.STRING_EXPERIENCE_ENSO_ROLE],
    [strTypes.STRING_EXPERIENCE_IT_CONSULTANT]: state.locale[strTypes.STRING_EXPERIENCE_IT_CONSULTANT],
    [strTypes.STRING_EXPERIENCE_ITSECTOR]: state.locale[strTypes.STRING_EXPERIENCE_ITSECTOR]
  };
};


export default connect(
  mapStateToProps,
  { getLocalizedString }
)(FanecaExperience);
