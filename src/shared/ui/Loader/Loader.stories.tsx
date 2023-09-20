import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from 'shared/ui/Loader/Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'left'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
  }
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
  }
}
