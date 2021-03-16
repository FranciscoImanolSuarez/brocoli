import React from 'react'
import Token from '../../tokens/Token'

import { choices } from '../../tokens/tokens'
import  toKebabCase  from '../../utils/tokebabCase'
export default {
    title: 'Tokens/Colors',
    component: Token.Color,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Story />
            </div>
        ),
    ],
}

export const Default = () => (
    <>
        <Token.Color
            color={choices.color.brand.mediumPurple}
            label="var(--color-brand-mediumPurple)"
            value={choices.color.brand.mediumPurple}
        />
    </>
)


export const Brand = () => {
    const brandKeys = Object.keys(choices.color.brand);
    return (
        <>
            { brandKeys.map(brandKey => (
                <Token.Color
                    key={brandKey}
                    label={`var(--color-brand-${toKebabCase(brandKey)})`}
                    value={choices.color.brand.[brandKey]}
                />
            )) }
        </>
    )
}


export const Red = () => {
    const keys = Object.keys(choices.color.red);
    return (
        <>
            { keys.map(key => (
                <Token.Color
                    key={key}
                    label={`var(--color-red-${toKebabCase(key)})`}
                    value={choices.color.red[key]}
                />
            )) }
        </>
    )
}
