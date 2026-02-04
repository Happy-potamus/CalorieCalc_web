import React, { useState } from "react";
import "./App.css";
import Menus from "./components/Menus";
import RendevouzMenu from "./components/locations/RendevouzMenu";
import Cafe1919Menu from "./components/locations/Cafe1919Menu";
import HedrickStudy from "./components/locations/HedrickStudy";
import BruinCafe from "./components/locations/BruinCafe";

function App() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div>
      <Menus
        items={["Rendevouz", "Study at Hedrick", "Bruin Cafe", "Cafe 1919"]}
        heading="Location"
        onSelect={(item: string) => setSelectedLocation(item)}
        selected={selectedLocation}
        
      />
      {selectedLocation === "Rendevouz" && <RendevouzMenu />}
      {selectedLocation === "Study at Hedrick" && <HedrickStudy />}
      {selectedLocation === "Bruin Cafe" && <BruinCafe />}
      {selectedLocation === "Cafe 1919" && <Cafe1919Menu />}
    </div>
  );
}
export default App;
