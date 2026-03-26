import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/HeroBanner/Hero";

import AvailablePlayers from "./Components/Players/AvailablePlayers";

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
          <AvailablePlayers playerPromise={playerPromise} />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
