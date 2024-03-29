import 'app/styles/index.scss'
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: any) => <ThemeProvider initialTheme={theme}>
                                                                  <div className={`app ${theme}`}><Story/></div>
                                                                </ThemeProvider>
