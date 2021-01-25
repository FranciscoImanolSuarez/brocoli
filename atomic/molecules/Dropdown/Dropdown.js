import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../atoms/Icon'
import './Dropdown.css'
const Dropdown = ({ options, value, onChange }) => (
  <div className="dropdown">
    <Icon type="rightArrow" hasBackground />
    <select className="dropdown-select" onChange={onChange} value={value}>
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
)

Dropdown.defaultProps = {
  value: '',
}
Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Dropdown
