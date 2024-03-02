import { ButtonHTMLAttributes } from 'react'
import { ButtonStyles } from './Button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  additionalStyles?: string
}

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  return <ButtonStyles {...rest}>{children}</ButtonStyles>
}

export default Button
