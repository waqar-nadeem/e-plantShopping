import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

// Import global styles
import './index.css';

// Import Provider from react-redux to connect Redux with React
import { Provider } from 'react-redux';

// Import the configured Redux store
import store from './store.js';

// Render the App component wrapped with Provider to enable global state access
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
