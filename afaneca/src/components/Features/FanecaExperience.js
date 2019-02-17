import React from 'react'
import FanecaExperienceItem from './FanecaExperienceItem'

export default function FanecaExperience() {
  return (
    <div>
      <h2>Experience</h2>
      <FanecaExperienceItem
        company="ENSO ORIGINS"
        location="Coimbra"
        role="Curricular Internship"
        dateStart="09/2018"
        dateEnd="03/2019"
      >
        <div>
          <p>
            In the final stage of my curricular plan as a BSc student, I spent a semester working full-time
            for ENSO ORIGINS, an emerging Portuguese startup that provides mainly mobile and web
            software solutions for other businesses.
          </p>
          <p>
            My project was to develop:
          </p>
          <ul>
            <li>Rest API (PHP – Slim Framework)</li>
            <li>Data Model / Persistence (pgSQL)</li>
            <li>Web Platform (JS/jQuery + HTML + CSS)</li>
            <li>Mobile App (React Native)</li>
            <li>Notifications System (Push Notifications + Email Notifications) </li>
          </ul>
          <p>
            The software was already being used in production internally by the time my internship
            ended.
          </p>
        </div>
      </FanecaExperienceItem>
      <FanecaExperienceItem
        company="FREELANCING"
        location="Remote"
        dateStart="04/2011"
        dateEnd="03/2017"
      >
        <div>
          <p>When I was 14, I created a little metablog that helped others manage their blogs with
            tutorials and content related with blogging technologies in general.</p>
          <p>That blog ended up gaining a bit of traction and I would be frequently approached by people,
            asking me to design their websites in exchange for money.</p>
          <p>
            I ended up working continuously has a Freelancer Web Designer & Web Writer, when the
            jobs were compatible with my schedule. In 2018, I opted out of that work to focus on my
            academic path.
          </p>
        </div>
      </FanecaExperienceItem>
    </div >
  )
}
