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
import type { ModalLayoutProps } from '../../Modal/ModalLayout'
import { ModalLoading } from '../../Modal/ModalLayout'
import { PopoverContent } from './PopoverContent'
import type { PopoverFooterProps } from './PopoverFooter'
import { PopoverFooter } from './PopoverFooter'
import { PopoverHeader } from './PopoverHeader'

export type PopoverLayoutProps = ModalLayoutProps &
  Pick<PopoverFooterProps, 'closeButton'> & {
    /**
     * Header will not be visually available but it will still properly announced in screen reader scenarios
     * @default false
     */
    hideHeader?: boolean
  }

export const PopoverLayout: FC<PopoverLayoutProps> = ({
  children,
  closeButton,
  footer = true,
  header,
  hideHeader = false,
  isLoading,
}) => {
  const internalFooter = typeof footer === 'boolean' ? null : footer

  return (
    <>
      {header && (
        <PopoverHeader hidden={hideHeader} hideClose={!!footer}>
          {header}
        </PopoverHeader>
      )}
      <PopoverContent hasFooter={!!footer} hasHeader={!!header}>
        {isLoading ? <ModalLoading /> : children}
      </PopoverContent>
      {footer && (
        <PopoverFooter closeButton={closeButton}>
          {internalFooter}
        </PopoverFooter>
      )}
    </>
  )
}
