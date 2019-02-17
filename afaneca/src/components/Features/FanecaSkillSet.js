import React from 'react'
import FanecaSkill from './FanecaSkill'
import { Row, Col } from 'react-materialize'

export default function FanecaSkillSet() {
    return (
        <div>
            <div><h2>Technologies</h2>
                <div style={styles.skill}>
                    <FanecaSkill name="HTML5 / CSS3" percentage="95.0" />
                </div>
                <div style={styles.skill}>
                    <FanecaSkill name="JS / JQUERY" percentage="90.0" />
                </div>
                <div style={styles.skill}>
                    <FanecaSkill name="React.js / React Native" percentage="70" />
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
                    <FanecaSkill name="C / C++" percentage="60" />
                </div>
                <div style={styles.skill}>
                    <FanecaSkill name="pgSQL / MySQL" percentage="70" />
                </div>
                <div style={styles.skill}>
                    <FanecaSkill name="GIT" percentage="80" />
                </div>
                <br />
                <h5>Also worked with</h5>
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

const styles = {
    skill: {
        marginTop: 50,
    },
    techChips: {

    }
}
