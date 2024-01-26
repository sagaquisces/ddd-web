import React, { Component } from 'react'
import Field from './Field'
import Button from './Button'
import { auth } from './firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...INITIAL_STATE
    }
    this.updateField = this.updateField.bind(this)
  }

  updateField(field, value) {
      this.setState({ [field]: value })
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
        document.getElementById("modal02").style.display = "none"
      })
      .catch(error => {
        this.updateField('error', error)
      })

    event.preventDefault()
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state

    const isInvalid =
      password === '' ||
      email === ''
    return (
      <form onSubmit={this.onSubmit}>
        <Field
          inputClassName="w3-input w3-border"
          label="Email"
          inputName="_replyto" //for formspree
          onChange={(e) => this.updateField('email', e.target.value)}
          type='email'
          value={email}
        />
        <Field
          inputClassName="w3-input w3-border"
          inputName="password"
          label="Password"
          onChange={(e) => this.updateField('password', e.target.value)}
          type='text'
          value={password}
        />
        <Button
          className="w3-button w3-block w3-teal w3-margin-bottom"
          formValues={this.state}
          disabled={isInvalid}
          buttonText="Login"
          onClick = {null}
          type='submit'
        />
        { error && <p className='w3-panel'>{error.message}</p>}
      </form>
    )
  }
}

export default LoginForm
