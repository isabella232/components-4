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

import type { DensityRamp, SpaceRamp } from '@looker/design-tokens'
import { css } from 'styled-components'
import { listItemDimensions } from './listItemDimensions'

const calculatePaddingY = (density: DensityRamp, space: SpaceRamp) => {
  const { py } = listItemDimensions(density)

  /**
   * The check for 0.375rem gets density = -1 ListItems to the desired 48px min height.
   * Without it, density = -1 ListItems would be at 44px.
   */
  return css`
    padding-bottom: ${py === '0.375rem' ? py : space[py]};
    padding-top: ${py === '0.375rem' ? py : space[py]};
  `
}

export const listItemPaddingY = (density: DensityRamp = 0) => css`
  ${({ theme }) => calculatePaddingY(density, theme.space)}
`
