import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLocale } from "../actions";

class FanecaLocale extends Component {
    static propTypes = {
        locale: PropTypes.string,
        setLocale: PropTypes.func,
    }
    constructor(props) {
        super(props)

        this._setLocale = this._setLocale.bind(this);
        this._setStyle = this._setStyle.bind(this);
    }

    _setStyle(lang) {
        const { locale } = this.props;

        if (locale === lang)
            return { ...styles.text, ...styles.textSelected };

        return styles.text;
    }

    _setLocale(lang) {
        const { locale, setLocale } = this.props;

        if (locale !== lang) {
            setLocale(lang);
        }

    }

    render() {
        return (
            <div style={styles.wrapper}>
                <p><span style={this._setStyle('pt')} onClick={() => this._setLocale('pt')}>PT</span>  <span onClick={() => this._setLocale('en')} style={this._setStyle('en')}>EN</span></p>
            </div>
        )
    }

}

const styles = {
    wrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '10%',
        paddingRight: '2vh',

    },
    text: {
        fontSize: '0.8em',
        cursor: 'pointer',

    },
    textSelected: {
        borderBottom: '2px solid white',
    }
}

const mapStateToProps = state => {
    return {
        lang: state.locale.lang,
    };
};

export default connect(
    mapStateToProps,
    { setLocale }
)(FanecaLocale);
