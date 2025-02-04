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
import styled from 'styled-components'
import { IndeterminateProgress } from './IndeterminateProgress'
import { DeterminateProgress } from './DeterminateProgress'
import type { ProgressCircularSizes } from './size'
import { progressCircularSize } from './size'

export interface ProgressCircularProps {
  /**
   * Size of spinner
   * @default large
   */
  size?: ProgressCircularSizes
  /**
   * The current progress of a determinable progress, between 0 and 1
   */
  progress?: number
  /**
   * Accessible label
   */
  label?: string
}

export const ProgressCircular: FC<ProgressCircularProps> = ({
  size = 'large',
  progress,
  label,
  ...props
}) => {
  return (
    <ProgressContainer
      size={size}
      role="progressbar"
      aria-label={label || undefined}
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={progress || undefined}
      {...props}
    >
      {progress !== undefined ? (
        <DeterminateProgress size={size} progress={progress} />
      ) : (
        <IndeterminateProgress size={size} />
      )}
    </ProgressContainer>
  )
}

const ProgressContainer = styled.div<{ size: ProgressCircularSizes }>`
  ${progressCircularSize}
  display: inline-flex;
  position: relative;
`
