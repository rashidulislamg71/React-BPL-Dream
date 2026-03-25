import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/HeroBanner/Hero";

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <section>
        <Hero />
      </section>
    </div>
  );
}

export default App;
