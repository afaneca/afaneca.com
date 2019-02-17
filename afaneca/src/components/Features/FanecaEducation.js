import React from 'react'
import FanecaEducationItem from './FanecaEducationItem'

export default function FanecaEducation() {
  return (
    <div>
      <h2>Education</h2>
      <FanecaEducationItem
        institution="INSTITUTO SUPERIOR DE ENGENHARIA DE COIMBRA"
        location="COIMBRA"
        degree="BSC INFORMATICS ENGINEERING"
        dateStart="09/2015"
        dateEnd="03/2019"
      > 
        <div>
          <p>
            Bachelor’s degree in Informatics Engineering (specialized in Application Development).
          </p>
          <p>
            The course focus mainly in the development of software in different (high and low level)
            programming languages, from Assembly to Java and the most important development
            concepts. 
          </p>
        </div>
      </FanecaEducationItem>
    </div>
  )
}
