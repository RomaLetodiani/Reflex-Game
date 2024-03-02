import styled from 'styled-components'

interface ButtonStylesProps {
  // Define a prop to accept additional CSS attributes
  additionalStyles?: string
  variant?: 'primary' | 'secondary' | 'danger'
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  ${(props) => props.additionalStyles}
`
