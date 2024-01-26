import React, { Component } from 'react'
import Button from './Button'
import AboutModal from './AboutModal'
import AboutForm from './AboutForm'

// handleLoginClick() {
//   this.state.authUser ? auth.doSignOut() : document.getElementById("modal02").style.display = "block"
// }

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false
    }
    this.createMarkup = this.createMarkup.bind(this)
    this.hideAboutEdit = this.hideAboutEdit.bind(this)
  }

  createMarkup() {
    return {__html: this.props.aboutText}
  }

  hideAboutEdit() {
    this.setState({ editMode: false })
  }

  render() {
    return (
      <div className="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
        <h4>
          <b>About Me</b>
        </h4>
        <img src="https://firebasestorage.googleapis.com/v0/b/test-1d7b6.appspot.com/o/images%2F5bbc3e0e-92b2-442a-bb67-c5cf5ec76f8d.jpg?alt=media&token=5220d0b4-e9d7-4601-8081-fe531d941c9c" alt="Me" className="w3-image w3-padding-32" width="600" height="650"/>
        <div
          className="w3-content w3-justify"
          style={{
            maxWidth: '600px'
          }}>


          <h4>Debra Denise Dunlap</h4>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          {/* {this.props.aboutText}
          </div> */}
          {/* <p>Hi! Welcome to my world, "Doggie Heaven Bed and Breakfast," where Heaven meets Earth, and Dogs come first!</p>

          <p>I have adored ALL animals since I was a little girl. My very first childhood pets were an adorable white rat, named Squiggy and a sweet yellow parakeet, named Melody.</p>

          <p>I began my exciting journey as a pet sitter on a website called Rover, where I quickly gained my experience in caring for dogs, through boarding, house/pet sitting, daycare, walking, and drop-in visits.</p>

          <p>This soon grew into a solid local Palm Springs client-base, where I also became a "dog nanny," which includes cooking fresh organic meals for the dogs, taking them to doctor's appointments, administering medications, assisting in training, etc.</p>

          <p>Caring for dogs is my passion in life, and am grateful to have the opportunity to run my own relaxing B & B, where the following royal amenities are included to make our furry guest's stay extra-special. They begin with serene candle-lit music and aromatherapy relaxation therapy, paw massage, home-cooked organic chicken meals and treats, peaceful garden strolls, and a cozy and relaxing environment with soft fluffy pillows and blankets for your earth angel.</p>

          <p>I have my own Cavapoo, named Sage, who assists me in making sure all our guests have a peaceful and joyful stay, while in my care.</p>

          <p>I look so forward to meeting you, and your furry Prince or Princess!</p> */}
          { this.props.authUser && this.state.editMode &&
            <AboutForm
              hideAboutEdit={this.hideAboutEdit}
              handleTextChange={this.props.handleTextChange}
              aboutText = {this.props.aboutText}
            />
          }
          { this.props.authUser && !this.state.editMode &&
            <Button
              className="w3-button w3-block w3-deep-orange w3-margin-bottom"
              buttonText="Edit About Text"
              onClick = {() => {
                this.setState({ editMode: true })
              }}
              type='button'
            />
          }

        </div>

        {/* <AboutModal handleTextChange={this.props.handleTextChange}/> */}
      </div>
    )
  }
}


export default About
