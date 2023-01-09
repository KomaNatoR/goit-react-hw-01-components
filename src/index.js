import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@emotion/react";

import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    green: "#0EAD00",
  },
  spacing: value => `${4 * value}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
