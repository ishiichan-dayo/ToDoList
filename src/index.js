import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import * as serviceWorker from 'serviceWorker';

import Top from 'pages/Top/Top';

const App = () => (
  <>
      <GlobalStyle />
      <Top />
  </>
);

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
  }
  input[type="radio"],
  input[type="checkbox"] {
    display: none;
  }
  select {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }
  textarea {
    appearance: none;
    resize: none;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
  }
  button,
  input[type="submit"] {
    appearance: none;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
  }

  select,
  textarea,
  input[type="text"],
  button,
  input[type="submit"] {
    width: 100%;
    font-size: 1.6rem;
    font-family: inherit;
  }

  select,
  textarea,
  input[type="text"] {
    padding: 1.0rem;
    border: 1px solid #ccc;
  }
  button,
  input[type="submit"] {
    cursor: pointer;
    width: 100%;
    background: #000;
    color: #fff;
    padding: 1.0rem;
  }
`

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
