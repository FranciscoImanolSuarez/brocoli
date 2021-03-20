import React from 'react'
import PropTypes from 'prop-types'

import Spacer from '../../../atomic/layout/Spacer/'
import Helper from '../helpers'

import styles from '../Token.module.css'

const Spacing = ({ label, value }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles.spacer}>
        <Spacer size={value} isVisible />
      </div>
    </Helper>
  )
}

Spacing.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Spacing