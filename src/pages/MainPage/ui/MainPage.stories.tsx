import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
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
