import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import video from "./assets/video2.mp4";
import Icon from "@mdi/react";
import { mdiXml, mdiMagnify, mdiDotsVertical, mdiWeatherNight, mdiWeatherSunny, mdiMenu, mdiClose, mdiInstagram, mdiGithub, mdiGit} from "@mdi/js";
import { useContext } from "react";
import { FormContext } from "./Context.tsx";
import PC from "./assets/pc.jpg"
import Pic from "./assets/dev.png"


function FlatIcon(props){
  <img src={props.src} />
}

function Menu(props) {
const {show, setShow} = useContext(FormContext)
setShow(props.active)

function handle(evt){
  evt.preventDefault()
  setShow(false)
  
  
}
  return (
  
  
    <div onClick={evt => {setShow(false)}} id="menu-container">
    <div  className={show ? "active": "disable"}>
    <div id="menu-card">
    
    <div id="first">
      
      <a href="#about">About me</a>
      <button onClick={evt=> {handle(evt)}}>
    <Icon path={mdiClose} size={1} />
   
    </button>
  
    </div>
    
    <a href="#skills">Skills</a>
    <a href="#projects" >Projects</a>
    <a href="#footer">Contact</a>
    <a href="#footer">GitHub</a>
    
    <div id="last">
      <p>Switch Theme</p>
      <select>
        <option><Icon path={mdiWeatherNight} size={1}/> Dark</option>
        <option><Icon path={mdiWeatherSunny} size={1}/> Light</option>
      </select>
    </div>
    </div>
    
    </div>
    </div>
    
 
    
    )
}

function BackVideo() {
  return (
    <video
      loop
      className="BackVideo"
      src={video}
      type="video/mp4"
      muted
      autoPlay
    ></video>
  );
}

function NavBar() {
  const {show, setShow, windowSize} = useContext(FormContext )


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
          <p id="title">jesiel364</p>
    
        </div>

        {windowSize<768 && (<div id="nav-right">
          
          <button className="Icon">
            <Icon path={mdiMagnify} size={1} />
          </button>
          <button onClick={(evt) => handleClick(evt)} className="Icon">
            <Icon path={mdiDotsVertical} size={1} />
          </button>
        </div>)}


        {windowSize>768 && (<div id='menu-flex'>
          <a href='#about'>About</a>
          <a href="#skills">Skills</a>
    <a href="#projects" >Projects</a>
    <a href="#footer">Contact</a>
    <span>|</span>
    <a><Icon path={mdiWeatherNight} size={1} /></a>
    <a><Icon path={mdiGithub} size={1} /></a>
        </div>)}
      </div>
      
     
      
    </div>
  );
}

function Section() {


  return (
    <div class="Section">
    <img src={Pic} />
    

     <div>
      <p id="subt">Proident incididunt consequat do consequat</p>

      <p id="body">
        Consequat ullamco laborum irure nulla qui ipsum aute excepteur anim
        consequat sunt in. Qui fugiat enim consequat laborum consectetur
        incididunt adipisicing excepteur velit ullamco tempor. Amet fugiat
        pariatur qui tempor laboris pariatur.
      </p>

      <button>About me </button>
    </div>
    </div>
  );
}

function About(){
  return(

<div id='about'>
<p id='subt'>Hi, I'm Jesiel, Web Developer</p>
<p id='title'>Front End Developer / JavaScript / Python </p>

<p id='body'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p> 
  <p id='body'>tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. </p>
  <p id='body'>Vitae et leo duis ut diam quam.</p>

</div>
    )

  

}

function Skills(){
  return(

<div id='skills'>
<p id='title'>Vitae et leo duis ut diam quam.</p>

<p id='subt'>Skills & Experience</p>


<p id='body'>
 The main area of expertise is front end development (client side of the web).</p> 
  <p id='body'>HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts.</p>

<div id="skills-list">
  
  <p>JavaScript</p>
  <p>React</p>
  <p>Vue</p>
  <p>Node</p>
  <p>Python</p>
  <p>Bootstrap</p>
  <p>CSS3</p>
  <p>HTML5</p>
  <p>Git</p>
  <p>Visual Studio</p>
  <p>Flask</p>
  <p>Django</p>
  <p>Adobe XD</p>
  <p>Figma</p>
</div>

</div>
    )

  

}

function Projects(){
  return (

    <div id="projects">
      
      <img src={PC} />
      <p id="title">Ecommerce application</p>
      <p id="subt">Pigz Delivery Clone</p>
      <p id="body">Online store for selling apparel & foot wear.</p>
      <p id="body"><strong>Built with:</strong> React</p>
    
    </div>
    )
}


function Footer(){
  return (

    <div id="projects">
      
      {/*<img src={PC} />*/}
      <p id="title">What would you do if you had a software expert available at your fingertips?</p>
      <p id="subt">jesiel364@gmail.com</p>
      <p id="body">Want to start new project? Or just say hey.
You can also follow me on Instagram.
</p>

<hr id="line" />

<div id="footer">
<div>
<button>
  <Icon path={mdiGithub} size={1} />
</button>
<button>
  <Icon path={mdiInstagram} size={1} />
</button>

</div>
<p>Copyright © 2023 Jesiel364 Inc.</p>


    
    </div>
    </div>
    )
}


function App() {
  

  return (
    <div id="container">
      <NavBar />
      <div className="Wrapper">
      
        <BackVideo />
        <Section />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
