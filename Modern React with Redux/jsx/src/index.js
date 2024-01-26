import App from './App';

// 1) IMPORT REACT AND REACTDOM LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) GET A REFERENCE TO THE DIV WITH ID ROOT
const el = document.getElementById('root');

// 3) TELL REACT TO TAKE CONTROL OF THAT ELEMENT
const root = ReactDOM.createRoot(el);

// 4) SHOW COMPONENT ON THE SCREEN
root.render(<App />);
