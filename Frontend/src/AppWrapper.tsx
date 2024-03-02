// AppWrapper.js

import { ReactNode } from 'react'
import styled, { StyleSheetManager, ThemeProvider } from 'styled-components'
import { theme } from './theme'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const shouldForwardProp = (prop: string) => {
    // Filter out any custom props that should not be passed to the DOM
    return !['additionalStyles', 'hasErrors'].includes(prop)
  }

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <AppStyles>{children}</AppStyles>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default AppWrapper

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 320px;
`
