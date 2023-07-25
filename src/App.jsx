import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./aboutCard.css";
import video from "./assets/video2.mp4";
import Icon from "@mdi/react";
import {
  mdiXml,
  mdiMagnify,
  mdiDotsVertical,
  mdiWeatherNight,
  mdiWeatherSunny,
  mdiMenu,
  mdiClose,
  mdiInstagram,
  mdiGithub,
  mdiGit,
} from "@mdi/js";
import { useContext } from "react";
import { FormContext } from "./Context.tsx";
import PC from "./assets/pc.jpg";
import Pic from "./assets/dev.png";
import Flag from "./assets/brasil.png";

function FlatIcon(props) {
  <img src={props.src} />;
}

function Menu(props) {
  const { show, setShow } = useContext(FormContext);
  setShow(props.active);

  function handle(evt) {
    evt.preventDefault();
    setShow(false);
  }
  return (
    <div
      onClick={(evt) => {
        setShow(false);
      }}
      id="menu-container"
    >
      <div className={show ? "active" : "disable"}>
        <div id="menu-card">
          <div id="first">
            <a href="#skills">Skills</a>
            <button
              onClick={(evt) => {
                handle(evt);
              }}
            >
              <Icon path={mdiClose} size={1} />
            </button>
          </div>

          <a href="#projects">Projects</a>
          <a href="#footer">Contact</a>
          <a href="#footer">GitHub</a>

          <div id="last">
            <p>Switch Theme</p>
            <select>
              <option>
                <Icon path={mdiWeatherNight} size={1} /> Dark
              </option>
              <option>
                <Icon path={mdiWeatherSunny} size={1} /> Light
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
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
  const { show, setShow, windowSize } = useContext(FormContext);

  function handleClick(evt) {
    evt.preventDefault();
    setShow(!show);
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

        {windowSize < 768 && (
          <div id="nav-right">
            <button className="Icon">
              <Icon path={mdiMagnify} size={1} />
            </button>
            <button onClick={(evt) => handleClick(evt)} className="Icon">
              <Icon path={mdiDotsVertical} size={1} />
            </button>
          </div>
        )}

        {windowSize > 768 && (
          <div id="menu-flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#footer">Contact</a>
            <span>|</span>
            <a>
              <Icon path={mdiWeatherNight} size={1} />
            </a>
            <a>
              <Icon path={mdiGithub} size={1} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Section() {
  return (
    <div class="Section">
      <img src={Pic} />

      <div>
        <p id="subt">Seja bem-vindo ao meu portfólio!</p>

        <p id="title">Desenvolvedor Front End / JavaScript / Python </p>

        <p id="body">
          Sou um apaixonado desenvolvedor com um olhar entusiasmado para a
          criação de soluções inovadoras e eficientes.
          <br></br>Abaixo, você encontrará uma seleção de projetos que
          demonstrem minha experiência e conhecimento em diversas áreas:{" "}
        </p>

        <button>Experiências</button>
      </div>
    </div>
  );
}

function About() {

function randColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

 let pillsColor = "#" + randomColor;
  // color.innerHTML = "#" + randomColor;
  return pillsColor
}


  return (
    <div id="about">
      <div id="card">
      
        <div id="div1">
          <p id="level">Level Junior</p>
          <div id="pic"><p>Pic</p></div>
        </div>
        
        <div id="div2">
          <p id="name">Jesiel Gomes</p>
          <div id="country">Country: <img src={Flag} /></div>
          <p id="age">Age: <span>22</span></p>
          <p id="hobs">Hobbies: <span style={{backgroundColor: randColor()}}>Piano</span>, <span style={{backgroundColor: randColor()}}>Books</span></p>
        </div>
        
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <p id="subt">Habilidades & Experiência</p>

      <p id="body">
        A minha principal área é o desenvolvimento front-end (lado do cliente da
        web).
      </p>
      <p id="body">
        HTML, CSS, JS, construção de aplicações web de pequeno e médio porte com
        Vue ou React, utilizando plugins personalizados, recursos, animações e
        implementação de layouts interativos.
      </p>

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
  );
}

function Projects() {
  return (
    <div id="projects">
      <img src={PC} />
      <p id="title">Ecommerce application</p>
      <p id="subt">Pigz Delivery Clone</p>
      <p id="body">Online store for selling apparel & foot wear.</p>
      <p id="body">
        <strong>Built with:</strong> React
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div id="projects">
      {/*<img src={PC} />*/}
      <p id="title">
        What would you do if you had a software expert available at your
        fingertips?
      </p>
      <p id="subt">jesiel364@gmail.com</p>
      <p id="body">
        Want to start new project? Or just say hey. You can also follow me on
        Instagram.
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
  );
}

function App() {
  return (
    <div id="container">
      <NavBar />
      <div className="Wrapper">
        <BackVideo />
        <About />
        <Section />

        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
