import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'left'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem dicta eaque eligendi eos provident quo soluta veritatis vitae voluptatibus! Amet delectus dolores eaque, laboriosam libero obcaecati officia temporibus velit.'
  }
}

export const PrimaryLight: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem dicta eaque eligendi eos provident quo soluta veritatis vitae voluptatibus! Amet delectus dolores eaque, laboriosam libero obcaecati officia temporibus velit.'
  }
}
