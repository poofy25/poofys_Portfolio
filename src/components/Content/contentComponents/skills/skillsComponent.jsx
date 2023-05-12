import { useState } from 'react'

import "./skills.css"


import htmlIcon from "/src/assets/skillsAssets/htmlIcon.png"
import cssIcon from "/src/assets/skillsAssets/cssIcon.png"
import jsIcon from "/src/assets/skillsAssets/jsIcon.png"
import reactIcon from '/src/assets/skillsAssets/reactIcon.png'
import viteIcon from '/src/assets/skillsAssets/viteIcon.png'

import gitIcon from '/src/assets/skillsAssets/gitIcon.png'
import githubIcon from '/src/assets/githubIcon.png'
import vscodeIcon from "/src/assets/skillsAssets/vscodeIcon.png"

import photoshopIcon from "/src/assets/skillsAssets/photoshopIcon.png"
import figmaIcon from "/src/assets/skillsAssets/figmaIcon.png"

import luaIcon from "/src/assets/skillsAssets/luaIcon.png"
import firebaseIcon from "/src/assets/skillsAssets/firebaseIcon.png"




function SkillsComponent() {

  return (
   <div className='skillsComponentContainer'>
    <p className='contentPageName'>SKILLS</p>
    <div className="skillsList">
      <p className='skillsName'>Web Technologies :</p>
      <div className="skills">
        <p>HTML</p><img src={htmlIcon}/>
        <p>CSS</p><img src={cssIcon}/>
        <p>JavaScript</p><img src={jsIcon}/>
        <p>ReactJS</p><img src={reactIcon}/>
        <p>Vite</p><img src={viteIcon}/>
    
      </div>
    </div>
    <div className="skillsList">
      <p className='skillsName'>Tools :</p>
      <div className="skills">
        <p>Git</p><img src={gitIcon}/>
        <p>Github</p><img src={githubIcon}/>
        <p>VSCode</p><img src={vscodeIcon}/>
      </div>
    </div>
    <div className="skillsList">
      <p className='skillsName'>Design :</p>
      <div className="skills">
        <p>Photoshop</p><img src={photoshopIcon}/>
        <p>Figma</p><img src={figmaIcon}/>
      </div>
    </div>
    <div className="skillsList">
      <p className='skillsName'>Other :</p>
      <div className="skills">
        <p>Lua</p><img src={luaIcon}/>
        <p>Firebase</p><img src={firebaseIcon}/>
      </div>
    </div>
   </div>
  )
 
}

export default SkillsComponent