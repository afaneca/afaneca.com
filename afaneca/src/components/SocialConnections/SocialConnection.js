import React, { Component } from 'react'

export default class SocialConnection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isMouseHover: false,
        }
    }

    render() {
        const { social_url, social_name, social_img } = this.props;
        const { isMouseHover } = this.state;

        return (
            <div style={styles.wrapper} onMouseEnter={() => this.setState({ isMouseHover: true })} onMouseLeave={() => this.setState({ isMouseHover: false })}>
                <p><a target="_blank" rel="noopener noreferrer" href={social_url}><img style={(isMouseHover)?styles.img_hover:styles.img} src={social_img} alt={social_name}></img></a></p>
            </div>
        )
    }
}


const styles = {
    wrapper: {
        flex: 1,
    },
    img: {
        width: '5vh',
        padding: '10px',
        borderRadius: '10px',
        transition: 'opacity 0.3s ease-in-out',
        opacity: '0.3',
    },
    img_hover: {
        width: '5vh',
        padding: '10px',
        borderRadius: '10px',
        transition: 'opacity 0.3s ease-in-out',
    }

}