import { useState , useEffect} from 'react'
import React from 'react'
import "./SideBar.css"
import portfolioIMG from '/src/assets/portofolioIMG.png'
import linkedinIcon from '/src/assets/linkedinIcon.png'
import instagramIcon from '/src/assets/instagramIcon.png'
import githubIcon from '/src/assets/githubIcon.png'

let itterations = 0;
const letters = "abcdefghijklmnopqrstuvwxyz";
function SideBarComponent() {


const [sideBarText , setSideBarText] = useState("")
let splitedText = sideBarText.split('|');

  useEffect(() => {
  setTimeout(()=>{
    
const text = "Hey! I'm poofy, | I like to codeeeee."
let neededText;
const interval = setInterval(()=>{

neededText = text.split("")
.map((letter , index )=> {
if (index < itterations) return text.charAt(index)
})
.join("")

if(itterations > text.length) clearInterval(interval)
itterations += 1/4;
setSideBarText(neededText)

}
,30)
},1250)
    ;
  }, []);




  return (

<div className='sideBarContainer'>

<div className='sideBarImgGradient'>
    <img className='sideBarPortofolioImg'  src={portfolioIMG}/>
</div>

<p className='sideBarText'>{splitedText[0]}<br/>{splitedText[1]} </p>

<footer className='sideBarFooter'>
<div className='sideBarSocials'>
   <img src={linkedinIcon}/>
   <img src={instagramIcon}/>
   <img src={githubIcon}/>
</div>

<a className='sideBarMail'>poofy25dev@gmail.com</a>
<p className='sideBarCopyright'>© poofy25</p>
</footer>

</div>

  )
}

export default SideBarComponent
