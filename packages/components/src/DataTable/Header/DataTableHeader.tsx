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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { FC } from 'react'
import React, { useContext } from 'react'
import { useID } from '../../utils/useID'
import { DataTableRow } from '../Item/DataTableRow'
import { DataTableContext } from '../DataTableContext'
import { DataTableHeaderCell } from './DataTableHeaderCell'

export const DataTableHeader: FC<CompatibleHTMLProps<HTMLDivElement>> = ({
  id,
}) => {
  const { allSelected, columns, select } = useContext(DataTableContext)
  const hasCheckbox = !!select
  const onChange = () => (select ? select.onSelectAll() : undefined)

  const headerColumns =
    columns &&
    columns.map(({ id, ...column }) => (
      <DataTableHeaderCell {...column} columnId={id} key={id} />
    ))

  return (
    <DataTableRow
      checked={allSelected}
      id={useID(id)}
      isHeaderRow
      hasCheckbox={hasCheckbox}
      onChange={onChange}
    >
      {headerColumns}
    </DataTableRow>
  )
}
