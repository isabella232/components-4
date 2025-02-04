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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { DialogContent } from './DialogContent'

describe('DialogContent', () => {
  test('basic', () => {
    renderWithTheme(<DialogContent>Dialog Content</DialogContent>)
    expect(screen.getByText('Dialog Content')).toHaveStyleRule(
      'padding-bottom',
      '1.25rem'
    )
  })
  test('display correct padding if hasFooter', () => {
    renderWithTheme(<DialogContent hasFooter>Stuff</DialogContent>)

    expect(screen.getByText('Stuff')).toHaveStyleRule(
      'padding-bottom',
      '0.125rem'
    )
  })

  test('display correct padding if hasHeader', () => {
    renderWithTheme(<DialogContent hasHeader>Stuff</DialogContent>)

    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem')
  })

  test('display correct padding if both  hasFooter & hasHeader', () => {
    renderWithTheme(
      <DialogContent hasFooter hasHeader>
        Stuff
      </DialogContent>
    )

    expect(screen.getByText('Stuff')).toHaveStyleRule(
      'padding-bottom',
      '0.125rem'
    )
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem')
  })

  test('Custom padding `p`', () => {
    renderWithTheme(<DialogContent p="u12">Hello world</DialogContent>)
    const item = screen.getByText('Hello world')
    expect(item).toHaveStyleRule('padding-left', '3rem')
    expect(item).toHaveStyleRule('padding-right', '3rem')
    expect(item).toHaveStyleRule('padding-top', '3rem')
    expect(item).toHaveStyleRule('padding-bottom', '3rem')
  })
})
