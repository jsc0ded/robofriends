import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import 'tachyons';
import CardList from './components/CardList';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);
