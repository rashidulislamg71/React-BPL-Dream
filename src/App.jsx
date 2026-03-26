import React, { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/HeroBanner/Hero";

import AvailablePlayers from "./Components/Players/AvailablePlayers";

const playerPromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [coin, setCoin] = useState(50000);

  return (
    <div>
      <nav>
        <NavBar coins={coin} />
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
