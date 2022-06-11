import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <StrictMode>
    <App />
  </StrictMode>
  </Router>
);
