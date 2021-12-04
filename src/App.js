import { useState } from "react";
import "./App.css";
import ReactGlobeGl from "react-globe.gl";
import CountryPage from "./CountryPage";
import React from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [country, setCountry] = useState("Canada");

  return (
    <div className="App">
      <outlet />
      <CountryPage country={country} />
      {/* <ReactGlobeGl

      <ReactGlobeGl
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeClick
      /> */}
      <Button>Test</Button>
      />
      {/* <Button>Test</Button> */}
    </div>
  );
}

export default App;
