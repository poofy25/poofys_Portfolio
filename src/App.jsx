import { useState } from 'react'
import reactLogo from './assets/react.svg'



import HeaderComponent from './components/Header/HeaderComponent'
import SideBarComponent from './components/Sidebar/SideBarComponent'
import ContentComponent from './components/Content/contentComponent'


import "./index.css"

function App() {
   const [currentcontent , setCurrentContent] = useState()
const callBackHandler = (e)=>{
      setCurrentContent(e)
  }


  return (
   <>
    <HeaderComponent callBackContent={callBackHandler}/>
    <div className='appContainer'>
    <SideBarComponent/>
    <ContentComponent  currentcontent={currentcontent}/>
    </div>
    
   </>
  )
 
}

export default App
