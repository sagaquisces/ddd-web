import React, { Component } from 'react'
import Field from './Field'
import Button from './Button'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.updateField = this.updateField.bind(this)
  }

  updateField(field, value) {
      this.setState({ [field]: value })
  }

  render() {
    return (
      <form method="POST" action="https://formspree.io/debbiepalmsprings13@gmail.com">
        <Field
          inputClassName="w3-input w3-border"
          label="Name"
          inputName="name"
          onChange={(e) => this.updateField('name', e.target.value)}
          type='text'
          value={this.state.name}
        />
        <Field
          inputClassName="w3-input w3-border"
          label="Email"
          inputName="_replyto" //for formspree
          onChange={(e) => this.updateField('email', e.target.value)}
          type='email'
          value={this.state.email}
        />
        <Field
          inputClassName="w3-input w3-border"
          inputName="message"
          label="Message"
          onChange={(e) => this.updateField('message', e.target.value)}
          textarea
          value={this.state.message}
        />
        <Button
          className="w3-button w3-block w3-black w3-margin-bottom"
          formValues={this.state}
          buttonText='Send Message'
          type='submit'
        />
      </form>
    )
  }
}

export default ContactForm
