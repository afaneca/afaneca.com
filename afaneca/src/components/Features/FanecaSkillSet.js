import React, { Component } from 'react'
import FanecaSkill from './FanecaSkill'
import { Row, Col } from 'react-materialize'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getLocalizedString } from "../../actions";
import * as strTypes from "../../locale/locale_strings";

class FanecaSkillSet extends Component {
    static propTypes = {
        string: PropTypes.string,
        getLocalizedString: PropTypes.func,
    }

    constructor(props) {
        super(props)

        /* LOCALE */
        this._getLocalizedString(strTypes.STRING_TECHNOLOGIES_TITLE);
        this._getLocalizedString(strTypes.STRING_TECHNOLOGIES_ALSO_WORKED_WITH);
    }

    componentDidUpdate() {
        /* LOCALE */
        this._getLocalizedString(strTypes.STRING_TECHNOLOGIES_TITLE);
        this._getLocalizedString(strTypes.STRING_TECHNOLOGIES_ALSO_WORKED_WITH);
    }

    _getLocalizedString(type) {
        const { getLocalizedString } = this.props;

        getLocalizedString(type);
    }

    render() {
        return (
            <div>
                <div><h2>{this.props[strTypes.STRING_TECHNOLOGIES_TITLE]}</h2>
                    <div style={styles.skill}>
                        <FanecaSkill name="HTML5 / CSS3" percentage="90.0" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="JS / JQUERY" percentage="90.0" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="React.js / React Native" percentage="75" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="PHP" percentage="70" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="JAVA" percentage="85" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="C / C++" percentage="70" />
                    </div>

                    <div style={styles.skill}>
                        <FanecaSkill name="pgSQL / MySQL" percentage="70" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="GIT" percentage="80" />
                    </div>
                    <br />
                    <br />
                    <h5>{this.props[strTypes.STRING_TECHNOLOGIES_ALSO_WORKED_WITH]}</h5>
                    <div style={styles.techChips}>
                        <Row>
                            <Col s={12}>
                                <FanecaSkill name="ASP.NET MVC" minor />
                                <FanecaSkill name="iOS (Swift)" minor />
                                <FanecaSkill name="Android (Java)" minor />
                                <FanecaSkill name="C#" minor />
                                <FanecaSkill name="WinAPI (C)" minor />
                                <FanecaSkill name="C for Unix" minor />
                                <FanecaSkill name="Drools" minor />
                                <FanecaSkill name="P5.js" minor />
                                <FanecaSkill name="MATLAB" minor />
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        )
    }

}

const styles = {
    skill: {
        marginTop: 50,
    },
    techChips: {

    }
}

const mapStateToProps = state => {
    return {
        [strTypes.STRING_TECHNOLOGIES_TITLE]: state.locale[strTypes.STRING_TECHNOLOGIES_TITLE],
        [strTypes.STRING_TECHNOLOGIES_ALSO_WORKED_WITH]: state.locale[strTypes.STRING_TECHNOLOGIES_ALSO_WORKED_WITH],
    };
};

export default connect(
    mapStateToProps,
    { getLocalizedString }
)(FanecaSkillSet);