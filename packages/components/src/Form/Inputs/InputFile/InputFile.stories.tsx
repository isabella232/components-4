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
import type { Story } from '@storybook/react/types-6-0'
import noop from 'lodash/noop'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import type { InputFileProps } from './InputFile'
import { InputFile } from './InputFile'

export default {
  argTypes,
  component: InputFile,
  title: 'InputFile',
}

const Template: Story<InputFileProps> = ({ handleFile, ...args }) => (
  <InputFile handleFile={() => noop()} {...args} />
)

export const Basic = Template.bind({})

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: 'Placeholder',
}

export const ButtonText = Template.bind({})
ButtonText.args = {
  buttonText: 'New Button Text',
}

export const Accepts = Template.bind({})
Accepts.args = {
  accept: '.json',
  value: 'Accepts only .json files',
}