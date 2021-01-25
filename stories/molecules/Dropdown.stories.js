import React from 'react'
import Dropdown from '../../atomic/molecules/Dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
}

export const Default = () => (
  <Dropdown
    onChange={() => {}}
    options={[
      {
        text: '8:00 AM',
        value: 800,
      },
      {
        text: '10:00 AM',
        value: 1000,
      },
      {
        text: '13:00 PM',
        value: 1300,
      },
      {
        text: '15:00 PM',
        value: 1500,
      },
    ]}
  />
)
