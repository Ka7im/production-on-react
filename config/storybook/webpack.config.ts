/* eslint-disable @typescript-eslint/prefer-includes */
import { type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  if (config.resolve?.modules && config.resolve.extensions) {
    config.resolve?.modules.push(paths.src)
    config.resolve?.extensions.push('.ts', '.tsx')
  }

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })
  }

  if (config.module?.rules) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    })

    config.module?.rules.push(buildCssLoaders(true))
  }
  return config
}
