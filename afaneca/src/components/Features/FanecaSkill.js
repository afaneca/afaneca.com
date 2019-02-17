import React from 'react'
import { Chip } from 'react-materialize'

export default function FanecaSkill({ name, percentage = 0, minor = false }) {
    if (!minor)
        return (
            <div className={['skillItem'].join(' ')}>
                <div className='skillName'>{name}</div>
                <div style={styles.progressBarWrapper}>
                    <div style={{ width: percentage + '%' }} className='progressBar'></div>
                    <div className='progressBarPercentage'>{percentage}%</div>
                </div>
            </div>
        )

    return (
        <Chip>{name}</Chip>
    )


}

const styles = {
    progressBarWrapper: {
        width: 500,
        height: '100%',
        /* border: '1px solid #c7cfe0', */
        background: '#eee',
        position: 'relative',
        textAlign: 'center',
    },
};
