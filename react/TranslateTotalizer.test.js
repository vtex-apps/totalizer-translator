import React from 'react'
import TranslateTotalizer from './TranslateTotalizer'
import { renderWithIntl, cleanup } from '../test-utils' // eslint-disable-line import/named

describe('TranslateTotalizer', () => {
  afterEach(cleanup)

  it('should translate when a valid id is provided', () => {
    const { getByText } = renderWithIntl(<TranslateTotalizer id="Discounts" />)

    const text = getByText('Discount')

    expect(text).toBeDefined()
  })

  it("should return the id when it's not translated", () => {
    const { getByText } = renderWithIntl(<TranslateTotalizer id="Foo" />)

    const text = getByText('Foo')

    expect(text).toBeDefined()
  })
})
