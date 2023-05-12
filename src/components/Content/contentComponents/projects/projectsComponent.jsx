import { useState } from 'react'

import "./projects.css"
import storeProjectImage from '/src/assets/storeProjectImage.png'
import caseSimulatorProjectImage from '/src/assets/caseSimulatorProjectImage.png'
import weatherAppProjectImage from '/src/assets/weatherAppProjectImage.png'




import ProjectDivComponent from './projectDivComponent'
function ProjectsComponent() {

  return (
   <div className='projectComponentContainer'>

   <p className='contentPageName'>PROJECTS</p>
   <ProjectDivComponent   
   projectName="Ecommerce website"
   projectImage={storeProjectImage}
   projectDescription="An ecommerce clothing website featuring 45 products with authetification and cart logic. "
   projectWebLink="https://poofy25.github.io/online-shop/"
   projectCodeLink="https://github.com/poofy25/online-shop"
   />
   <ProjectDivComponent   
   projectName="Case Simulator"
   projectImage={caseSimulatorProjectImage}
   projectDescription="A website that simulates opening cases in CS:GO"
   projectWebLink="https://poofy25.github.io/Case-Simulator/"
   projectCodeLink="https://github.com/poofy25/Case-Simulator"
   />
   <ProjectDivComponent
   projectName="Weather App"
   projectImage={weatherAppProjectImage}
   projectDescription="A simple weather app using the WeatherAPI"
   projectWebLink="https://poofy25.github.io/WeatherApp/"
   projectCodeLink="https://github.com/poofy25/WeatherApp"
   />



   </div>
  )
 
}

export default ProjectsComponent
