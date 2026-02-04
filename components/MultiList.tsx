import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Food } from "../models/Food";

interface ListGroupProps {
  items?: Food[];
  heading?: string;
  onSelect?: (items: Food[]) => void;
}

function MultiList({
  items = [],
  heading = "List Group",
  onSelect,
}: ListGroupProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    setSelectedItems((prev) =>
      prev.filter((item) => items.some((i) => i.name === item)),
    );
  }, [items]);

  if (items.length === 0) {
    return (
      <div className="d-flex flex-column">
        <h1>{heading}</h1>
        <p>There are no items in the list</p>
      </div>
    );
  }

  const handleButtonClick = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    if (onSelect) {
      const selectedFoods = items.filter((food) =>
        newSelectedItems.includes(food.name),
      );
      onSelect(selectedFoods);
    }
  };

  return (
    <div className="d-flex flex-column">
      <h1>{heading}</h1>
      <div className="d-flex flex-column gap-3">
        {items.map((item) => (
          <Button
            key={item.name}
            variant={selectedItems.includes(item.name) ? "primary" : "light"}
            onClick={() => handleButtonClick(item.name)}
            style={{
              width: "200px",
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
    </div>
  );
}

export default MultiList;
