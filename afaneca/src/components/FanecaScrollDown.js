import React from 'react'


export default function FanecaScrollDown() {
    return (
        <div onClick={() => { window.location.hash = 'features';}} className="arrow">
            <span></span>
            <span></span>
            
        </div>
    )
}

const styles = {

}