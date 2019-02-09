import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getLocalizedString } from "../actions";
import * as strTypes from "../locale/locale_strings";
import FanecaPhoto from './FanecaPhoto'


class FanecaHeader extends Component {
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
        this._getLocalizedString(strTypes.STRING_OCCUPATION);
    }

    componentDidUpdate(){
        /* LOCALE */
        this._getLocalizedString(strTypes.STRING_OCCUPATION);
    }

    _getLocalizedString(type) {
        const { getLocalizedString } = this.props;

        getLocalizedString(type);
    }


    render() {
        return (
            <div style={styles.wrapper}>
                <FanecaPhoto />
                <h1 style={styles.name}>António Faneca</h1>
                <p style={styles.occupation}>{this.props[strTypes.STRING_OCCUPATION]}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        [strTypes.STRING_OCCUPATION]: state.locale[strTypes.STRING_OCCUPATION],
    };
};

export default connect(
    mapStateToProps,
    { getLocalizedString }
)(FanecaHeader);


const styles = {
    wrapper: {
        marginTop: '10%',
    },
    name: {
        "textShadow": "0px 4px 3px rgba(0,0,0,0.4),\n0px 8px 13px rgba(0,0,0,0.1),\n0px 18px 23px rgba(0,0,0,0.1)",
        marginTop: '1%',
    },
    occupation: {
        marginTop: '-2%'
    }
}

