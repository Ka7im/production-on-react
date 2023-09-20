import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'left'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {

  }
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {

  }
}
