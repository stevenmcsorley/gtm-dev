import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import React from 'react'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Home Page/i,
    })

    expect(heading).toBeVisible()
  })
})
