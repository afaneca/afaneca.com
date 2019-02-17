import React, {Component} from 'react'

export default class FanecaEducationItem extends Component{

    render(){
        const { institution, dateStart, dateEnd, location, degree, children } = this.props;
        
        return (
            <div>
                <h5>{institution}, {location}, {degree}</h5>
                <p style={{ color: '#4ea199' }}>{dateStart} - {dateEnd}</p>
                {children}
            </div>
        )
    }
  
}
