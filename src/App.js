// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookDashboard from "./components/BookDashboard";
import AuthorDashboard from "./components/AuthorDashboard";
import Library from "./components/Library";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/books" element={<BookDashboard />} />
            <Route path="/authors" element={<AuthorDashboard />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
