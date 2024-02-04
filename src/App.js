import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Auth from "./pages/Auth";
import MoviePage from "./pages/MoviePage";
import "./index.css";
import "./components.sass";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/page/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
