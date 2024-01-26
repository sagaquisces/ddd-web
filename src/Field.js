import React from 'react'
import PropTypes from 'prop-types'
import 'w3-css/w3.css'

const Field = ({
  onChange,
  value,
  textarea,
  label,
  inputClassName,
  inputName,
  type
}) => (
  <div className="w3-section w3-left-align">
    <label>{ label }</label>
    {
      textarea ?
      <textarea
        className={ inputClassName }
        onChange={ onChange }
        value={ value }
        name={ inputName }
      />
      :
      <input
        className={ inputClassName }
        onChange={ onChange }
        type={ type }
        value={ value }
        name={ inputName }
      />
    }
    {/* <input
      className={ inputClassName }
      onChange={ onChange }
      type={ textarea ? 'textarea' : 'text'}
      value={ value }
      name={ inputName }
    /> */}
  </div>
)

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,
}

Field.defaultProps = {
  textarea: false
}

export default Field
