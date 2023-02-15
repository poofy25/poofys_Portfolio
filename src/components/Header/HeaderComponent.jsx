import { useState } from 'react'
import React from 'react'
import "./Header.css"
import ProjectsComponent from '../Content/contentComponents/projects/projectsComponent';
import SkillsComponent from '../Content/contentComponents/skills/skillsComponent';
import AboutmeComponent from '../Content/contentComponents/aboutMe/aboutmeComponent';
let buttonCalled = false;
let timeOutId ;
const transitionTime = 750;
function HeaderComponent(props) {
   const [status , setStatus] = useState(false);
   const [prevBtn , setPrevBtn] = useState("none");

 const clickHandler = (e) => {

if(prevBtn == e.target.id)return;

      if (status === false && buttonCalled === false){
        setStatus(true)
        document.querySelector('.contentContainer').style.opacity = "1"
        document.querySelector('.contentContainer').style.maxWidth = "75vw"
       // document.querySelector('.content').style.maxWidth = "100%"
       document.querySelector('.content').style.transform = 'translateX(0%)'
        console.log("1")
      }
      else if(status === false && buttonCalled === true){
        setStatus(true)
        document.querySelector('.contentContainer').style.opacity = "0"
      //  document.querySelector('.content').style.maxWidth = "0"
      document.querySelector('.content').style.transform = 'translateX(100%)'
        console.log("2")
        
      }
      else if (status === true && buttonCalled === true){
        setStatus(false)
        document.querySelector('.contentContainer').style.opacity = "0"
        //document.querySelector('.content').style.maxWidth = "0"
        document.querySelector('.content').style.transform = 'translateX(100%)'
        console.log("3")
      }



   if(buttonCalled === false){
      if(e.target.id === "projectsBtn"){
        props.callBackContent(<ProjectsComponent/>)
        buttonCalled = true
        }
        if(e.target.id === "skillsBtn"){
          props.callBackContent(<SkillsComponent/>)
          buttonCalled = true
        }
        if(e.target.id === "aboutMeBtn"){
            props.callBackContent(<AboutmeComponent/>)
            buttonCalled = true
        }

      } else {
        document.querySelector(".contentContainer").style.transition = `opacity ${transitionTime/1000}s ease-in-out `

        clearInterval(timeOutId);

          if(e.target.id === "projectsBtn"){

          timeOutId = setTimeout(()=>{
            props.callBackContent(<ProjectsComponent/>)
           // document.querySelector('.content').style.maxWidth = "100%"
            document.querySelector('.contentContainer').style.opacity = "1"
            document.querySelector('.content').style.transform = 'translateX(0%)'
           
            },transitionTime)
            }
           
            if(e.target.id === "skillsBtn"){

              timeOutId = setTimeout(()=>{
              props.callBackContent(<SkillsComponent/>)
             // document.querySelector('.content').style.maxWidth = "100%"
              document.querySelector('.contentContainer').style.opacity = "1"
              document.querySelector('.content').style.transform = 'translateX(0%)'

              },transitionTime)
            }
            
            
            if(e.target.id === "aboutMeBtn"){

              timeOutId = setTimeout(()=>{
                props.callBackContent(<AboutmeComponent/>)
               // document.querySelector('.content').style.maxWidth = "100%"
                document.querySelector('.contentContainer').style.opacity = "1"
                document.querySelector('.content').style.transform = 'translateX(0%)'
              },transitionTime)
            }
            buttonCalled = true
      }
      
      setPrevBtn(e.target.id) 
 }


  return (

<div className='headerContainer'>
<button id="projectsBtn" onClick={clickHandler}>Projects</button>
<button id="skillsBtn" onClick={clickHandler}>Skills</button>
<button id="aboutMeBtn" onClick={clickHandler}>About me</button>
</div>

  )
 
}

export default HeaderComponent
