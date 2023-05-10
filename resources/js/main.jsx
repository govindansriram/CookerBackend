import React from 'react'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './Cook.jsx'
import './index.css'
import styled from 'styled-components';

const dive = styled.div`
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

if (document.getElementById('user')) {
    ReactDOM.createRoot(document.getElementById('user')).render(
        <React.StrictMode>
            <BrowserRouter>
                <dive>
                    <App/>
                </dive>
            </BrowserRouter>
        </React.StrictMode>,
    )
}
