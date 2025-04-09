import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Assicurati che l'ID dell'elemento sia 'app' o il nome che hai dato nel tuo index.html
const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Elemento con ID "app" non trovato!');
}
