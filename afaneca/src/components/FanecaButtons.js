import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getLocalizedString } from "../actions";
import * as strTypes from "../locale/locale_strings";
import { Button, Icon } from 'react-materialize'
import { Link } from 'react-router-dom';

class FanecaButtons extends Component {
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
        this._getLocalizedString(strTypes.STRING_DOWNLOAD_RESUME);
        this._getLocalizedString(strTypes.STRING_GO_TO_BLOG);
    }

    componentDidUpdate() {
        /* LOCALE */
        this._getLocalizedString(strTypes.STRING_DOWNLOAD_RESUME);
        this._getLocalizedString(strTypes.STRING_GO_TO_BLOG);
    }

    _getLocalizedString(type) {
        const { getLocalizedString } = this.props;

        getLocalizedString(type);
    }
    
    
    render() {
        return (
            <div>
                <Button style={styles.btn} target="_blank" node='a' href='/blog' waves='light'>{this.props[strTypes.STRING_GO_TO_BLOG]}<Icon left>edit</Icon></Button>
                <Link to="/resume"><Button waves='light' target="_blank" node='a'>{this.props[strTypes.STRING_DOWNLOAD_RESUME]}<Icon left>description</Icon></Button></Link>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        [strTypes.STRING_GO_TO_BLOG]: state.locale[strTypes.STRING_GO_TO_BLOG],
        [strTypes.STRING_DOWNLOAD_RESUME]: state.locale[strTypes.STRING_DOWNLOAD_RESUME],
    };
};

export default connect(
    mapStateToProps,
    { getLocalizedString }
)(FanecaButtons);

const styles = {
    btn: {
        margin: '2%'
    }
}