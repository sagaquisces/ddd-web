import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }



  render() {
    // const recipient = `mailto:${this.props.email}`
    // const subject = '?subject=Interested%20Client'
    // const body = `&body=${this.props.formValues.message}`
    return (
      <button
        className={this.props.className}
        // href={`${recipient}${subject}${body}`}
        onClick = { this.props.onClick }
        disabled={this.props.disabled}
        type={this.props.type}
      >
        {this.props.buttonText}
      </button>
    )
  }
}

export default Button
