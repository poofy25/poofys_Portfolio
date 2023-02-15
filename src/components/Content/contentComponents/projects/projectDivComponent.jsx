import { useState } from 'react'

import "./projects.css"
import githubIcon from "/src/assets/githubIcon.png"
import webIcon from '/src/assets/webIcon.png'

function ProjectDivComponent(props) {

  return (
  
   <div className="projectDiv">
   <p className='projectDivName'>
    {props.projectName}
   </p>
   <a href={props.projectWebLink} target="_blank" className='projectDivImg'>
   <img src={props.projectImage}/>
   </a>
   <div className="projectDivLastRow">
   <p className='projectDivDesc'>
   {props.projectDescription}
   </p>
   <div className="projectDivWebUrl projectDivIcons">
    <a href={props.projectWebLink} target="_blank">
   <img  src={webIcon}/>
   </a>
   </div>
   <div className="projectDivGithubCode projectDivIcons" >
   <a href={props.projectCodeLink} target="_blank">
   <img  src={githubIcon}/>
   </a>
   </div>
   </div>
   
   </div>


  )
 
}

export default ProjectDivComponent