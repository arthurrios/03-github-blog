import 'styled-components'
import { defaultTheme } from '../styles/theme/defaulTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
