import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './views/App'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
            <App />
        
    </React.StrictMode>
)