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

import type { FC } from 'react'
import React from 'react'
import { ArrowDropDown } from '@styled-icons/material'
import { ButtonOutline } from '../../Button'
import { Box2 } from '../../Layout'
import { Paragraph } from '../../Text'
import { Popover } from '../Popover'
import { PopoverContent } from '../Layout/PopoverContent'

export const ContentOverflow: FC = ({ children }) => (
  <Box2 position="absolute" top="40%" left="40%">
    <Popover
      pin
      placement="bottom"
      content={
        <PopoverContent width="18rem">
          <Paragraph>Stuff above spacer</Paragraph>
          <Box2 height="60vh" bg="ui1">
            Spacer
          </Box2>
          <Paragraph>Content below spacer</Paragraph>
        </PopoverContent>
      }
    >
      <ButtonOutline iconAfter={<ArrowDropDown />} m="xxlarge">
        {children}
      </ButtonOutline>
    </Popover>
  </Box2>
)
