// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BookProvider } from "./context/BookContext";
import { AuthorProvider } from "./context/AuthorContext";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BookProvider>
    <AuthorProvider>
      <App />
    </AuthorProvider>
  </BookProvider>,
  document.getElementById("root")
);
