import React from 'react'
import photo from '../res/img/photo.jpg'
export default function FanecaPhoto() {
    return (
        <div style={styles.photoWrapper}>
            <img style={styles.photo} src={photo} alt="My beautiful face"></img>
        </div>
    )
}

const styles = {
    photoWrapper: {
        
    },
    photo: {
        borderRadius: '100%',
        border: '5px solid white',
        width: '20vh',
    }
}
