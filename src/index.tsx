import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//store
import { store } from './store/store';
//components
import App from './app/App';
//service workers
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//styles
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
