import styled from 'styled-components'
import { css } from 'styled-components'

const media = {
  medium: (...args) => css`
    @media (max-width: 1200px) {
      ${ css(...args) }
    }
  `
}
export const Button =  styled.button`
    padding: 12px 32px;
    line-height: 1;
    border: none;
    border-radius: 34.5px;
    opacity: .9;
    color: #fff;
    background-color: #a3d200;
    cursor: pointer;
    &:hover {
        border-color: #b7e611;
        opacity: 1;
    }
    &:focus {
        outline:0;
    }
`
export const LoginButton =  Button.extend`
    margin-top: 63px;
    ${ media.medium`
        margin-top: 16px;
  `}
`
export const AboutButton = Button.extend`
    margin-top: 128px;
`