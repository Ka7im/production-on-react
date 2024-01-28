import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'left'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
