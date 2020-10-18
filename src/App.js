import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from  './styles/GlobalStyles';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer 
      autoClose={5000}
      closeOnClick
      />
    </>
  );
}

export default App;
