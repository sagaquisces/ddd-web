import React from 'react'
import LoginForm from './LoginForm'

const LoginModal = (props) =>
<div
  id="modal02"
  className="w3-modal w3-black"
  style={{paddingTop:0}}

>
  <span
    className="w3-button w3-black w3-xlarge w3-display-topright"
    onClick={() => {
      document.getElementById("modal02").style.display='none'
    }}
  >
    ×
  </span>
  <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <LoginForm />
  </div>
</div>

export default LoginModal
