import React from "react";
import './Intro.css';
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Logoreact from "../../img/logoreact.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv.jsx";
import Laptop from "../../img/laptop.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Sushant Dhungana</span>
          {/* <Typical
          steps={[
              'Software Engineer', 1000, 'Web Developer', 1000,
          ]}
          loop={Infinity}
          /> */}
          <span>Software Engineer</span>
          <span>
            Frontend Developer with excellent level of development skills.
          </span>
        </div>
        <button className="button i-button">Lets Talk</button>
        <div className="i-icons">
            <a href='aa'>
            <img src={Github} alt=''/>
            </a>
            <a href='aa'>
            <img src={Linkedin} alt=''/>
            </a>
            <a href='aa'>
            <img src={Instagram} alt=''/>
            </a>
        </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={boy} alt=""/>
          <img src={Laptop} alt=""/>

          <div style={{top: '-4%', left:"68%"}}>
              <FloatingDiv image={Logoreact} txt1='Web' txt2='Developer'/>
          </div>
          <div style={{top: '18rem', left:'0rem'}}>
          <FloatingDiv image={thumbup} txt1='FrontEnd' txt2='Designer'/>
          </div>
          <div>
            <div className="blur" style={{backgroundColor: "rgb(238 210 255"}}></div>
          </div>
      </div>
    </div>
  );
}

export default Intro;