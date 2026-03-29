import React, { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/HeroBanner/Hero";

import AvailablePlayers from "./Components/Players/AvailablePlayers";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

const playerPromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [coin, setCoin] = useState(5000);

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
          <AvailablePlayers
            playerPromise={playerPromise}
            setCoin={setCoin}
            coin={coin}
          />
        </Suspense>
      </section>

     <ToastContainer />
     <Footer />
    </div>
  );
}

export default App;
