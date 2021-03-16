import React from 'react'
import Paragraph from '../../atomic/atoms/Paragraph'

export default {
    title: 'Atoms/Paragraph',
    component: Paragraph,
    decorators: [
        (Story) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Story />
          </div>
        ),
      ],
}

export const Default = () => <Paragraph> Hello Paragraph </Paragraph>



export const Colors = () => (
    <>
      <Paragraph color="default">Default Color</Paragraph>
      <Paragraph color="muted">Primary Color</Paragraph>
    </>
  )
  
  export const Sizes = () => (
    <>
      <Paragraph size="sm">
        El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
        saxofón detrás del palenque de paja. 1234567890
      </Paragraph>
      <Paragraph size="md">
        El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
        saxofón detrás del palenque de paja. 1234567890
      </Paragraph>
      <Paragraph size="lg">
        El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
        saxofón detrás del palenque de paja. 1234567890
      </Paragraph>
    </>
  )
  
  export const Weights = () => (
    <>
      <Paragraph weights="normal">
        El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
        saxofón detrás del palenque de paja. 1234567890
      </Paragraph>
      <Paragraph weights="medium">
        El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
        saxofón detrás del palenque de paja. 1234567890
      </Paragraph>
    </>
  )
  