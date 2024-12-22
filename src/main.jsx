import {React} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import StoreContextProvider from './context/context.jsx'


createRoot(document.getElementById('root')).render(


    <HashRouter>

    
        <StoreContextProvider>
            <App />
        </StoreContextProvider>

      
    </HashRouter>


)