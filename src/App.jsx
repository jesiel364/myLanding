import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import video from "./assets/video.mp4";
// import "@mdi/font/css/materialdesignicons.css"
import Icon from "@mdi/react";
import { mdiXml, mdiMagnify, mdiDotsVertical, mdiMenu } from "@mdi/js";

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
  return (
    <div className="NavBar">
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
          <p className="Icon">
            <Icon path={mdiDotsVertical} size={1} />
          </p>
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
  const [count, setCount] = useState(0);

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
