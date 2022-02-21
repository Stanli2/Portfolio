import React, { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Software Developer', 'Freelancer', 'Free Spirit'] })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, my name is </h2>
          <h1>Obinwanne Ikechukwu</h1>
          <h3>
             And I'm a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
