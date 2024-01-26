import React from 'react'
import AboutForm from './AboutForm'

const AboutModal = (props) =>
<div
  id="modal03"
  className="w3-modal w3-white"
  style={{paddingTop:0}}

>
  <span
    className="w3-button w3-black w3-xlarge w3-display-topright"
    onClick={() => {
      document.getElementById("modal03").style.display='none'
    }}
  >
    ×
  </span>
  <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <AboutForm handleTextChange={props.handleTextChange}/>
  </div>
</div>

export default AboutModal
