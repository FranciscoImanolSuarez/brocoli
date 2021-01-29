import React from 'react'
import PropTypes from 'prop-types'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

import classNames from 'classnames'
import styles from './Spacer.module.css'

import { getSize } from './helpers'

const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
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
