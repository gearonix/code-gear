import { css } from 'styled-components'

export const wh = (w = '100%', h = w) => css`
  width: ${w};
  height: ${h};
`

export const testBorder = css`
  border: 1px solid red;
`

export const hPadding = (size: number) => css`
  padding-left: ${size}px;
  padding-right: ${size}px;
`
export const flex = (jc = 'flex-start', ai = 'stretch', dir = 'row') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${dir};
`

type Font = 'Poppins' | 'Consolas'

export const font = (font : Font) => css`
  font-family: '${font}', sans-serif;
`
