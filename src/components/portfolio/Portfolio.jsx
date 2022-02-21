import React from "react"
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
            <div className="wrapper2">
              <h2 className="about_heading">
                About Me
              </h2>
              <div className="about_meta">
                <p className="about_text">
                I am Obinwanne Ikechukwu, and I am looking for a job in Customer Services. 
                I have 10 years of experience in related job positions. 
                I started working as a Customer Care Agent in a call center gradually moving to a Customer Experience Analyst. 
                I am a team player. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. 
                I believe that a person should work on developing their professional skills and learning new things all the time. Currently, 
                I am looking for new career opportunities my current job position cannot provide. I have enough experience to occupy a managing position and 
                I will be glad to work on increasing the customer loyalty rate of your company.
                </p>
                <div className="about_button">
                  <a href="#"><button className="about">Download  CV</button></a>
                  <a href="#contact"><button className="about">Hire Me</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="imageContainer2">
              <img src="" alt="" />
            </div>
          </div>
          
      </div>
  )
}
