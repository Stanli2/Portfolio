import React from "react"
import { useState } from "react";
import "./contact.scss"

export default function Contact() {

  const[message, setMessage] = useState(false)


  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      
      <div className="left">
      <div className="footer_social">
            <a href="https://www.linkedin.com/in/obinwanne-ikechukwu/"><div ><img className="img-tag1" src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e830050cf9bc2c348479b60_youtube.svg" alt="" /></div></a>
            <a href="https://www.instagram.com/stanli_obi/"><div ><img className="img-tag1" src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83002e40b6b8486e320705_instagram.svg" alt="" /></div></a>
            <a href="https://www.linkedin.com/in/obinwanne-ikechukwu/"><div ><img className="img-tag1" src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e82ffa4097a9061280e5e5a_004-linkedin-logo-button.svg" alt="" /></div></a>
            <a href="https://www.instagram.com/stanli_obi/"><div ><img className="img-tag1" src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e82ffa4871a992216e6ceb9_001-facebook-logo-button.svg" alt="" /></div></a>
          </div>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply As Soon As Possible :)</span>}
        </form>
      </div>
      
    </div>
  )
}
