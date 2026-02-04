import React, { useState } from "react";
import ListGroup from "../ListGroup";
import { Food } from "../../models/Food";
import {
  cafe1919_panini,
  cafe1919_pizzette,
  cafe1919_sides,
} from "../../data/cafe1919Data";

function Cafe1919Menu() {
  const [selectedPanini, setSelectedPanini] = useState<Food | null>(null);
  const [selectedPizzette, setSelectedPizzette] = useState<Food | null>(null);
  const [selectedSide, setSelectedSide] = useState<Food | null>(null);

  return (
    <>
      <div className="d-flex flex-row gap-3" role="group">
        <ListGroup
          items={cafe1919_panini}
          heading="Panini"
          selectedItem={selectedPanini}
          onSelect={(item) => {
            setSelectedPanini(item);
            setSelectedPizzette(null);
          }}
        />
        <ListGroup
          items={cafe1919_pizzette}
          heading="Pizzette"
          selectedItem={selectedPizzette}
          onSelect={(item) => {
            setSelectedPizzette(item);
            setSelectedPanini(null);
          }}
        />
        <ListGroup
          items={cafe1919_sides}
          heading="Sides"
          selectedItem={selectedSide}
          onSelect={(item) => {
            setSelectedSide(item);
          }}
        />
      </div>
      {(selectedPanini || selectedPizzette || selectedSide) && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "8px",
 
          }}
        >
          <h2>Selected Items:</h2>
          {(selectedPanini || selectedPizzette) && (
            <p>
              <strong>Entrée:</strong>{" "}
              {(selectedPanini || selectedPizzette)?.name}
            </p>
          )}
          {selectedSide && (
            <p>
              <strong>Side:</strong> {selectedSide.name}
            </p>
          )}
          <h3>Totals:</h3>
          <p>
            <strong>Total Calories:</strong>{" "}
            {((selectedPanini || selectedPizzette)?.calories || 0) +
              (selectedSide?.calories || 0)}
          </p>
          <p>
            <strong>Total Protein:</strong>{" "}
            {((selectedPanini || selectedPizzette)?.protein || 0) +
              (selectedSide?.protein || 0)}
            g
          </p>
        </div>
      )}
    </>
  );
}

export default Cafe1919Menu;
