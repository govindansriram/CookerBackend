import React from 'react'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './Cook.jsx'
import './index.css'
import {createGlobalStyle} from 'styled-components';

const Dive = createGlobalStyle`
    body {
        margin: 0 auto;
        display: flex;
        min-width: 320px;
        min-height: 100vh;
    }

    #user {
        width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
`;

if (document.getElementById('user')) {
    ReactDOM.createRoot(document.getElementById('user')).render(
        <React.StrictMode>
            <BrowserRouter>
                <Dive/>
                <App/>
            </BrowserRouter>
        </React.StrictMode>,
    )
}
