import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import i18n from './i18n'
import './index.css'

if (typeof document !== 'undefined') {
  try {
    const lng = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
    document.documentElement.setAttribute('lang', lng)
  } catch {
    /* ignore */
  }
}

i18n.on('languageChanged', (lng: string) => {
  if (typeof document !== 'undefined') {
    try {
      document.documentElement.setAttribute('lang', lng.split('-')[0])
    } catch {
      /* ignore */
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
