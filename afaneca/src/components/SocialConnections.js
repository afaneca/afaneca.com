import React from 'react'
import SocialConnection from './SocialConnections/SocialConnection'
import email2 from '../res/img/email2.png'
import facebook2 from '../res/img/facebook2.png'
import github2 from '../res/img/github2.png'
import linkedin2 from '../res/img/linkedin2.png'

export default function SocialConnections() {
    return (
        <div style={styles.wrapper}>
            {/* <SocialConnection social_name="Facebook" social_url="https://facebook.com/afaneca" social_img={facebook2} /> */}
            <SocialConnection social_name="Linkedin" social_url="https://linkedin.com/in/afaneca" social_img={linkedin2} />
            <SocialConnection social_name="Github" social_url="https://github.com/afaneca" social_img={github2} />
            <SocialConnection social_name="Email" social_url="mailto:me@afaneca.com" social_img={email2} />
        </div>
    )
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row'
    }
}