import React, { useState } from "react";
import { Food } from "../../models/Food";
import { bruin_sandwiches, bruin_sides } from "../../data/bruinCafeData";
import Button from "../Button";
import ListGroup from "../ListGroup";

function BruinCafe() {
  const [selectedSandwich, setSelectedSandwich] = useState<Food | null>(null);
  const [selectedSide, setSelectedSide] = useState<Food | null>(null);

  // Arrange items in 3 columns x 7 rows
  const columns = 3;
  const itemsPerColumn = Math.ceil(bruin_sandwiches.length / columns);
  const gridItems = [];

  for (let col = 0; col < columns; col++) {
    const columnItems = bruin_sandwiches.slice(
      col * itemsPerColumn,
      (col + 1) * itemsPerColumn,
    );
    gridItems.push(columnItems);
  }

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>
        {"            "} Toasted Sandwiches
      </h1>
      <div className="d-flex flex-row gap-3" role="group">
        {gridItems.map((column, colIndex) => (
          <div key={colIndex} className="d-flex flex-column gap-2">
            {column.map((item) => (
              <Button
                key={item.name}
                variant={
                  selectedSandwich?.name === item.name ? "primary" : "light"
                }
                onClick={() => setSelectedSandwich(item)}
                style={{
                  width: "300px",
                  height: "50px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  textAlign: "left",
                  paddingLeft: "15px",
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
        ))}
        <ListGroup
          items={bruin_sides}
          heading="Sides"
          selectedItem={selectedSide}
          onSelect={(item) => {
            setSelectedSide(item);
          }}
        />
      </div>
      {(selectedSandwich || selectedSide) && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "10px",
          }}
        >
          <h2>Selected Items:</h2>
          {selectedSandwich && (
            <p>
              <strong>Sandwich:</strong> {selectedSandwich.name}
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
            {(selectedSandwich?.calories || 0) + (selectedSide?.calories || 0)}
          </p>
          <p>
            <strong>Total Protein:</strong>{" "}
            {(selectedSandwich?.protein || 0) + (selectedSide?.protein || 0)}g
          </p>
        </div>
      )}
    </>
  );
}

export default BruinCafe;
