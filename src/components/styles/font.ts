import { css } from 'styled-components'

export const imports = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Pacifico');
`

enum Font {
  Primary = "'Open Sans', sans-serif",
  Secondary = "'Pacifico', cursive"
}

export default Font