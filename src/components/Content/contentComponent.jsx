import { useState } from 'react'

import ProjectsComponent from './contentComponents/projects/projectsComponent'
import SkillsComponent from './contentComponents/skills/skillsComponent'
import AboutmeComponent from './contentComponents/aboutMe/aboutmeComponent'

import "./content.css"
function ContentComponent(props) {

  return (
   <div className='contentContainer'>
      <div className='content' currentcontent={props.currentcontent}>
          {props.currentcontent}
      </div>
   </div>
  )
 
}

export default ContentComponent
