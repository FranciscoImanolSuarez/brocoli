import React from 'react'
import Heading from '../../atomic/atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

export const Default = () => <Heading>Heading</Heading>

export const Primary = () => <Heading color="primary">Primary</Heading>

export const Medium = () => <Heading size="md">Medium</Heading>

export const Small = () => <Heading size="sm">Small</Heading>

export const ExtraSmall = () => <Heading size="xs">ExtraSmall</Heading>
