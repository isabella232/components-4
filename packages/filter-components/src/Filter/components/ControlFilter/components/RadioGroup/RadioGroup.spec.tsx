/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { RadioGroup } from './RadioGroup'

const options = [
  {
    label: 'label1',
    value: 'value1',
    name: 'radioSpec',
  },
  {
    label: 'label2',
    value: 'value2',
    name: 'radioSpec',
  },
  {
    label: 'label3',
    value: 'value3',
    name: 'radioSpec',
  },
]

describe('RadioGroup tests', () => {
  it('renders any value', () => {
    renderWithTheme(
      <RadioGroup value={''} options={options} onChange={jest.fn()} anyOption />
    )

    expect(screen.getByLabelText('any value')).toBeChecked()
  })

  it('handles loading state', () => {
    renderWithTheme(
      <RadioGroup
        isLoading
        value={'value1'}
        options={options}
        onChange={jest.fn()}
      />
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
