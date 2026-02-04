import React, { useState } from "react";
import ListGroup from "../ListGroup";
import MultiList from "../MultiList";
import { Food } from "../../models/Food";
import {
  rende_protein,
  rende_style,
  rende_toppings,
} from "../../data/rendezData";

function RendevouzMenu() {
  const [selectedProtein, setSelectedProtein] = useState<Food | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<Food | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<Food[]>([]);

  const calculateCalorieTotal = (): number => {
    let total = 0;
    if (selectedProtein) total += selectedProtein.calories;
    if (selectedStyle) total += selectedStyle.calories;
    selectedToppings.forEach((topping) => (total += topping.calories));
    return total;
  };

  const calculateProteinTotal = (): number => {
    let total = 0;
    if (selectedProtein) total += selectedProtein.protein;
    if (selectedStyle) total += selectedStyle.protein;
    selectedToppings.forEach((topping) => (total += topping.protein));
    return total;
  };

  return (
    <>
      <div className="d-flex flex-row  gap-3" role="group">
        <ListGroup
          items={rende_protein}
          heading="Protein "
          onSelect={(item) => {
            setSelectedProtein(item);
          }}
        />
        <ListGroup
          items={rende_style}
          heading="Style "
          onSelect={(item) => {
            setSelectedStyle(item);
          }}
        />
        <MultiList
          items={rende_toppings}
          heading="Toppings "
          onSelect={(items) => {
            setSelectedToppings(items);
          }}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "10px",
        }}
      >
        <h2>Totals:</h2>
        <p>
          <strong>Total Calories:</strong> {calculateCalorieTotal()}
        </p>
        <p>
          <strong>Total Protein:</strong> {calculateProteinTotal()}g
        </p>
      </div>
    </>
  );
}

export default RendevouzMenu;
