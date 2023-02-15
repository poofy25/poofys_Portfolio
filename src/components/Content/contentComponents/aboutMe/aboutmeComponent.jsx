import { useState } from 'react'

import "./aboutme.css"
function AboutmeComponent() {

  return (
   <div className='aboutmeComponentContainer'>
   <p className='contentPageName'> ABOUT ME</p>
   <p className='aboutmeContent'>

    As a high school student, I have decided to pursue a career in software engineering.
    To start, I decided to learn how to build websites as I already had some experience in coding,
    having learned Lua a few months prior.<br/> On October 24th, 2022, I created my first website.
    Over time, I have gained a deeper understanding of HTML, CSS, and JavaScript,
    and have since decided to dive into a JavaScript framework, specifically ReactJS.<br/>
    This website is my first project using ReactJS, and I hope you have enjoyed it!

    
   </p>
   </div>
  )
 
}

export default AboutmeComponent