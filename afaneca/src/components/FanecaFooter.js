import React, { Component } from 'react'

export default class FanecaFooter extends Component {
    render() {
        return (
            <div>
                <p style={styles.footerText}>Proudly built with <a style={styles.link} target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React.js</a></p>
            </div>
        )
    }
}
const styles = {
    footerText: {
        //position: 'absolute',
        /* height: '3%',
        marginTop: '3%', */
        fontSize: '65%',
        left: 0,
        right: 0,
        bottom: 0,
    },
    link: {
        color: 'white',
    }
}