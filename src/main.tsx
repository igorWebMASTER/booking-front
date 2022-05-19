import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalCSS from './presentation/styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalCSS />
  </React.StrictMode>
)
