import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Spacer.module.css'

import { getSize } from './helpers'

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames('spacer', {
      'is-visible': isVisible,
    })}
    style={{
      display: 'block',
      width: getSize(size),
      maxHeight,
      height: '100vh',
    }}
  />
)

Vertical.defaultProps = {
  maxHeight: '100%',
}
Vertical.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
