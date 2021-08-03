import React from 'react'
import { screen, render } from '@testing-library/react'
import ChargePointMap from './ChargePointMap'

test('testing header is Map', () => {
    render(<ChargePointMap />)
    const testid = screen.getByTestId('map-element')
    expect(testid.innerHTML).toMatch('Map')
})