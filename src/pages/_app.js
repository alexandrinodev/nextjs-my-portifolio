import { createGlobalStyle, ThemeProvider } from 'styled-components'
import './index.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
`

const theme = {
  colors: {
    primary: '#0070f3',
    backgroung: '#1b1b1b'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}