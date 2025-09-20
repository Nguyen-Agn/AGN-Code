import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './Context.jsx'
import { Toast } from 'blockly'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <Toaster/>
      <App/>
    </ContextProvider>
)
