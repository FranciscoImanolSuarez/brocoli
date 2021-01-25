import React from 'react'
import Icon from '../../atomic/atoms/Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

export const Default = () => <Icon type="rightArrow" />
export const HasBackground = () => <Icon type="rightArrow" hasBackground />
