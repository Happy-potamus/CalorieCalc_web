import React, { useState } from "react";
import ListGroup from "../ListGroup";
import { Food } from "../../models/Food";
import {
  hedrick_bread,
  hedrick_protein,
  hedrick_cheese,
  hedrick_sides,
} from "../../data/hedrickStudyData";

function HedrickStudy() {
  const [selectedBread, setSelectedBread] = useState<Food | null>(null);
  const [selectedProtein1, setSelectedProtein1] = useState<Food | null>(null);
  const [selectedProtein2, setSelectedProtein2] = useState<Food | null>(null);
  const [selectedCheese, setSelectedCheese] = useState<Food | null>(null);
  const [selectedSide, setSelectedSide] = useState<Food | null>(null);

  const calculateCalorieTotal = (): number => {
    let total = 0;
    if (selectedBread) total += selectedBread.calories;
    if (selectedProtein1) total += selectedProtein1.calories;
    if (selectedProtein2) total += selectedProtein2.calories;
    if (selectedCheese) total += selectedCheese.calories;
    if (selectedSide) total += selectedSide.calories;
    return total;
  };

  const calculateProteinTotal = (): number => {
    let total = 0;
    if (selectedBread) total += selectedBread.protein;
    if (selectedProtein1) total += selectedProtein1.protein;
    if (selectedProtein2) total += selectedProtein2.protein;
    if (selectedCheese) total += selectedCheese.protein;
    if (selectedSide) total += selectedSide.protein;
    return total;
  };

  return (
    <>
      <div className="d-flex flex-row gap-3" role="group">
        <ListGroup
          items={hedrick_bread}
          heading="Bread"
          selectedItem={selectedBread}
          onSelect={(item) => {
            setSelectedBread(item);
          }}
        />
        <ListGroup
          items={hedrick_protein}
          heading="Protein 1"
          selectedItem={selectedProtein1}
          onSelect={(item) => {
            setSelectedProtein1(item);
          }}
          buttonStyle={{ height: "40px", fontSize: "12px" }}
        />
        <ListGroup
          items={hedrick_protein}
          heading="Protein 2"
          selectedItem={selectedProtein2}
          onSelect={(item) => {
            setSelectedProtein2(item);
          }}
          buttonStyle={{ height: "40px", fontSize: "12px" }}
        />
        <ListGroup
          items={hedrick_cheese}
          heading="Cheese"
          selectedItem={selectedCheese}
          onSelect={(item) => {
            setSelectedCheese(item);
          }}
        />
        <ListGroup
          items={hedrick_sides}
          heading="Sides"
          selectedItem={selectedSide}
          onSelect={(item) => {
            setSelectedSide(item);
          }}
        />
      </div>
      {(selectedBread ||
        selectedProtein1 ||
        selectedProtein2 ||
        selectedCheese ||
        selectedSide) && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "10px",
          }}
        >
          <h2>Selected Items:</h2>
          {selectedBread && (
            <p>
              <strong>Bread:</strong> {selectedBread.name}
            </p>
          )}
          {selectedProtein1 && (
            <p>
              <strong>Protein 1:</strong> {selectedProtein1.name}
            </p>
          )}
          {selectedProtein2 && (
            <p>
              <strong>Protein 2:</strong> {selectedProtein2.name}
            </p>
          )}
          {selectedCheese && (
            <p>
              <strong>Cheese:</strong> {selectedCheese.name}
            </p>
          )}
          {selectedSide && (
            <p>
              <strong>Side:</strong> {selectedSide.name}
            </p>
          )}
          <h3>Totals:</h3>
          <p>
            <strong>Total Calories:</strong> {calculateCalorieTotal()}
          </p>
          <p>
            <strong>Total Protein:</strong> {calculateProteinTotal()}g
          </p>
        </div>
      )}
    </>
  );
}

export default HedrickStudy;
