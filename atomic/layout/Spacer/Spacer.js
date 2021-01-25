import React from 'react'
import PropTypes from 'prop-types'
import { choices } from '../../../tokens/tokens'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

import classNames from 'classnames'
import './Spacer.css'

const getSize = (size) => choices.spacing[size]

const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames('spacer', {
      'is-visible': isVisible,
    })}
    style={{
      display: 'inline-block',
      width: getSize(size),
      height: getSize(size),
    }}
  />
)

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical
export default Spacer
