import styled from 'styled-components'

interface InputStylesProps {
  // Define a prop to accept additional CSS attributes
  additionalStyles?: string
  hasErrors?: boolean
}

export const InputStyles = styled.div<InputStylesProps>`
  position: relative;

  input {
    outline: none;
    border: none;
    border: 1px solid ${({ hasErrors }) => (hasErrors ? 'red' : 'gray')};
    border-radius: 12px;
    padding: 10px 12px;
    font-size: 18px;
    width: 100%;
  }

  label {
    color: ${({ hasErrors }) => (hasErrors ? 'red' : 'gray')};
    position: absolute;
    pointer-events: none;
  }

  p {
    color: red;
    position: absolute;
  }

  ${(props) => props.additionalStyles}
`
