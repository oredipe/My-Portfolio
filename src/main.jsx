import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/newsreader'
import '@fontsource-variable/newsreader/opsz-italic.css'
import '@fontsource/instrument-serif/latin-400.css'
import './index.css'
import App from './App.jsx'

// Hash routing is only for the single-file preview build; the live site uses normal URLs.
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
