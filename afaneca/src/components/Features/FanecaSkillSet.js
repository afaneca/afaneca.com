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
                        <FanecaSkill name="Android SDK" percentage="90" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="Kotlin" percentage="90" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="JAVA" percentage="90" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="GIT" percentage="90" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="JS / JQUERY" percentage="75" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="NodeJS" percentage="70" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="HTML5/CSS3" percentage="70" />
                    </div>
                    <div style={styles.skill}>
                        <FanecaSkill name="ReactJS / React Native" percentage="70" />
                    </div>

                    <div style={styles.skill}>
                        <FanecaSkill name="pgSQL / MySQL" percentage="65" />
                    </div>
                    
                    <br />
                    <br />
                    <h5>{this.props[strTypes.STRING_TECHNOLOGIES_ALSO_WORKED_WITH]}</h5>
                    <div style={styles.techChips}>
                        <Row>
                            <Col s={12}>
                                <FanecaSkill name="C/C++" minor />
                                <FanecaSkill name="ASP.NET MVC" minor />
                                <FanecaSkill name="iOS (Swift)" minor />
                                <FanecaSkill name="C#" minor />
                                <FanecaSkill name="PHP" minor />
                                <FanecaSkill name="Appium" minor />
                                <FanecaSkill name="WinAPI (C)" minor />
                                <FanecaSkill name="C for Unix" minor />
                                <FanecaSkill name="Drools" minor />
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