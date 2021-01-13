import React from 'react'
import Button from '../../atomic/atoms/Button'
import Icon from '../../atomic/atoms/Icon'

export default {
    title: 'Atoms/Button',
    component: Button
}


export const Primary = () => (<Button type="primary">Button Primary</Button>)

export const Secondary = () => (<Button type="secondary">Button Secondary</Button>)

export const Tertiary = () => (<Button type="tertiary">Button Tertiary</Button>)
