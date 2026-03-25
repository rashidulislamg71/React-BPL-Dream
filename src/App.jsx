import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/HeroBanner/Hero";
import Players from "./Components/Players/Players";

const playerPromise = fetch("/data.json").then((res) => res.json());

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <section>
        <Hero />
      </section>
      <section>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <Players playerPromise={playerPromise} />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
