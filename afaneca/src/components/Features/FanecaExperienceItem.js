import React, {Component} from 'react'

export default class FanecaExperienceItem extends Component {
  render(){
    const { company, location, role, dateStart, dateEnd, children } = this.props;
    return (
    <div>
      <h5>{company}, {location} {(role ? ('(' + role + ')'):(''))}</h5>
        <p style={{ color: '#4ea199'}}>{dateStart} - {dateEnd}</p>
      {children}
    </div>
  )
  }
  
}
