import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => (
  <div
    className="w3-container w3-light-grey w3-center w3-padding-32 w3-padding-large"
    id="contact"
  >
    <div className="w3-content" style={{maxWidth:'600px'}}>
    {/*
      <p>Do you want me to take care of your dog? Fill out the form and fill me in with the details... :) I love meeting new people!</p>
      <ContactForm />
    */}
    <h4 className="w3-center"><b>Contact Me</b></h4>
    <div class="w3-section">
    <ul class="w3-ul w3-white w3-hover-shadow">
      <li class="w3-black w3-xlarge w3-padding-32"><span class="w3-tag w3-round w3-red">CALL</span> or <span class="w3-tag w3-round w3-red">TEXT</span></li>
      <li class="w3-padding-16">
        <p class="w3-wide w3-xxlarge">(760)219-7483 <a href="tel:+01-760-219-7483" alt="Call Debra" className="fa fa-phone w3-hover-opacity iconStyle phone" style={{color:'red'}}>{' '}</a></p>
      </li>
    </ul>
  </div>
    </div>
  </div>
)

export default ContactSection
