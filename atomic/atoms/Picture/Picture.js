import React from 'react'
import PropTypes from 'prop-types'
import './Picture.css'

import { getWidth } from './Helpers'

const Picture = ({ src, width }) => (
  <picture className="picture">
    <img src={src} style={{ maxWidth: getWidth(width) }} />
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}
export default Picture
