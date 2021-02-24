import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Picture from '../Picture'

import styles from './Avatar.module.css'
import { mapSize } from './helpers'

const Avatar = ({ src, size }) => {
  return (
    <div className={classNames(styles.avatar)}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
      />
    </div>
  )
}

Avatar.defaultProps = {
  size: 'auto',
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default Avatar


