import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './app/App';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/aluplast-components-counter/sw.js")
      .then((reg) => console.log("Service Worker registered.", reg))
      .catch((err) => console.log("Service Worker registration failed.", err));
  });
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
