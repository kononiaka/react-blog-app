import React from "react";
import "./App.css";
import Home from "./container/Home/Home";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
