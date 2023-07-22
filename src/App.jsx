import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import video from "./assets/video.mp4";
// import "@mdi/font/css/materialdesignicons.css"
import Icon from "@mdi/react";
import { mdiXml, mdiMagnify, mdiDotsVertical, mdiMenu, mdiClose} from "@mdi/js";
import { useContext } from "react";
import { FormContext } from "./Context.tsx";



function Menu(props) {
const {show, setShow} = useContext(FormContext)
setShow(props.active)

function handle(evt){
  evt.preventDefault()
  setShow(false)
  
  
}
  return (
  
  
    <div id="menu-container">
    <div className={show ? "active": "disable"}>
    <div id="menu-card">
    
    <div id="first">
      
      <p>commodo</p>
      <button onClick={evt=> {handle(evt)}}>
    <Icon path={mdiClose} size={1} />
    </button>
    </div>
    
    <p>magna</p>
    <p>proident</p>
    <p>adipisicing</p>
    
    </div>
    
    </div>
    </div>
    
 
    
    )
}

function BackVideo() {
  return (
    <video
      loop
      className="backVideo"
      src={video}
      type="video/mp4"
      muted
      autoPlay
    ></video>
  );
}

function NavBar() {
  const {show, setShow} = useContext(FormContext )

  function handleClick(evt) {
    evt.preventDefault();
    setShow(!show)
    
  }

  return (
    <div className="NavBar">
       <Menu active={show} />
      <div className="Nav">
        <div className="Logo">
          <div id="icon">
            <Icon path={mdiXml} size={1} />
          </div>
          <p id="title">jesiel</p>
        </div>

        <div id="nav-right">
          <p className="Icon">
            <Icon path={mdiMagnify} size={1} />
          </p>
          <button onClick={(evt) => handleClick(evt)} className="Icon">
            <Icon path={mdiDotsVertical} size={1} />
          </button>
        </div>
      </div>
      
     
      
    </div>
  );
}

function Section() {
  return (
    <div className="Section">
      <p id="title">Reprehenderit</p>
      <p id="subt">Proident incididunt consequat do consequat</p>

      <p id="body">
        Ex irure nulla incididunt fugiat esse commodo eu ea. Laboris do do
        excepteur amet enim esse enim eiusmod et veniam ea proident.
      </p>
      <p id="body">
        Consequat ullamco laborum irure nulla qui ipsum aute excepteur anim
        consequat sunt in. Qui fugiat enim consequat laborum consectetur
        incididunt adipisicing excepteur velit ullamco tempor. Amet fugiat
        pariatur qui tempor laboris pariatur.
      </p>
    </div>
  );
}



function App() {
  

  return (
    <div id="container">
      <NavBar />
      <div className="Wrapper">
      
        <BackVideo />
        <Section />
      </div>
    </div>
  );
}

export default App;
