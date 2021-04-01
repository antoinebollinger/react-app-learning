import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import './scss/custom.scss';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Spinner from './components/Spinner';

ReactDOM.render(
  <React.Suspense fallback={<Spinner />}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();