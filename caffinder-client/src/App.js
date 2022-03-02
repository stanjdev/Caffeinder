import React from "react";
import "./App.css";
import HomePage from "./navigation/HomePage";
import SearchResults from "./navigation/SearchResults";
import CoffeeShop from "./components/CoffeeShop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SearchResults />} path="/search_results/:query" />
        <Route element={<CoffeeShop />} path="/coffee_shop/:id" />
      </Routes>
    </Router>
  );
}

export default App;
