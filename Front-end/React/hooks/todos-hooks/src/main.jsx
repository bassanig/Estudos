import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/index.css'
import React from 'react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
