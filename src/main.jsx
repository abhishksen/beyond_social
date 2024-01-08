import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.100', 'gray.900')(props),
      color: mode('gray.900', 'whiteAlpha.900')(props),
      // bg: mode('gray.100', 'gray.900')(props),
      // color: mode('gray.900', 'gray.700')(props),
    }
  })
}

const config = {
  initialColorMode: "dark",
  // initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
