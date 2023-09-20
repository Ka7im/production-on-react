import type { Preview } from '@storybook/react'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'

const preview: Preview = {
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
