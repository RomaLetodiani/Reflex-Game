import { InputHTMLAttributes } from 'react'
import { InputStyles } from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Additional props specific to Input component can be defined here
  label?: string
  hasError?: boolean
  errorMessage?: string
  additionalStyles?: string
}

const Input = ({ label, hasError, errorMessage, additionalStyles, ...rest }: InputProps) => {
  return (
    <InputStyles additionalStyles={additionalStyles} hasErrors={hasError}>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input {...rest} />
      {hasError && <p>{errorMessage}</p>}
    </InputStyles>
  )
}

export default Input
