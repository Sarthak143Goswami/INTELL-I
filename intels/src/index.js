import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from './Auth/UserContext';

const root = document.getElementById('root');

const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      </UserProvider>
  </React.StrictMode>
);
