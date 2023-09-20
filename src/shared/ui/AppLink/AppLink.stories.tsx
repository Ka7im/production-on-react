import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'left'
  },
  tags: ['autodocs'],
  args: {
    to: '/'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Ссылка'
  }
}

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Ссылка'
  }
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Ссылка'
  }
}

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Ссылка'
  }
}
