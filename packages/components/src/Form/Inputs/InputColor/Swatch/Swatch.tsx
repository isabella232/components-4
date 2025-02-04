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

import styled, { css } from 'styled-components'
import type {
  CompatibleHTMLProps,
  SizeProps,
  SpaceProps,
} from '@looker/design-tokens'
import { reset, size, space, shouldForwardProp } from '@looker/design-tokens'

export interface SwatchProps
  extends SizeProps,
    SpaceProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string
}

const emptySwatch = css`
  position: relative;
  &::after {
    /* stylelint-disable-next-line */
    background: red;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    width: 100%;
  }
`

export const Swatch = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<SwatchProps>(({ color = 'transparent', size = 'xsmall' }) => ({
    color,
    'data-testid': 'swatch',
    size,
  }))<SwatchProps>`
   ${reset}
 
   ${size}
   ${space}
   background-color: ${({ color }) => color};
   border: 1px solid ${({ theme: { colors } }) => colors.ui3};
   border-radius: 50%;
   cursor: ${({ disabled }) => !disabled && 'pointer'};
 
   ${({ color }) => color === 'transparent' && emptySwatch}
 
   &:hover {
     border: 1px solid ${({ theme: { colors } }) => colors.ui4};
   }
 `
