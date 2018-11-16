import { createGlobalStyle } from 'styled-components'
import Font, { imports } from '../styles/font'

const GlobalStyle = createGlobalStyle`
  ${require('modern-normalize')}
  ${imports}

  * {
    font-family: ${Font.Primary};
  }
`

export default GlobalStyle