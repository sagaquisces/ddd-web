import React, { Component } from 'react'
import Field from './Field'
import Button from './Button'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { db } from './firebase'


// import { auth } from './firebase'

const INITIAL_STATE = {
  text: '',
  error: null,
}

class AboutForm extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({ text: this.props.aboutText })
  }

  handleChange(value) {
    this.setState({ text: value })
    this.props.handleTextChange(value)
  }

  handleClick() {
    db.doCreateAbout(this.state.text).
      then(() => {
        this.props.hideAboutEdit()
      }).
      catch(() => alert('failure'))

  }

  // onSubmit = (event) => {
  //   const {
  //     email,
  //     password,
  //   } = this.state
  //
  //   auth.doSignInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       this.setState(() => ({ ...INITIAL_STATE }))
  //       document.getElementById("modal02").style.display = "none"
  //     })
  //     .catch(error => {
  //       this.updateField('error', error)
  //     })
  //
  //   event.preventDefault()


  render() {
    return (
      <div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button
          className="w3-button w3-block w3-black w3-margin-bottom"
          formValues={this.state}
          onClick={this.handleClick}
          buttonText='Save this!'
          type='button'
        />
      </div>
    )
  }
}

export default AboutForm
