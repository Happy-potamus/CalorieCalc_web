import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Food } from "../models/Food";
import { CSSProperties } from "react";

interface ListGroupProps {
  items?: Food[];
  heading?: string;
  onSelect?: (item: Food) => void;
  selectedItem?: Food | null;
  buttonStyle?: CSSProperties;
}

function ListGroup({
  items = [],
  heading = "List Group",
  onSelect,
  selectedItem: externalSelectedItem,
  buttonStyle,
}: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (externalSelectedItem) {
      setSelectedItem(externalSelectedItem.name);
    } else {
      setSelectedItem(null);
    }
  }, [externalSelectedItem]);

  useEffect(() => {
    if (selectedItem && !items.some((item) => item.name === selectedItem)) {
      setSelectedItem(null);
    }
  }, [items, selectedItem]);

  const handleClick = (item: Food) => {
    setSelectedItem(item.name);
    if (onSelect) {
      onSelect(item);
    }
  };

  if (items.length === 0) {
    return (
      <div className="d-flex flex-column">
        <h1>{heading}</h1>
        <p>There are no items in the list</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <h1>{heading}</h1>
      <div className="d-flex flex-column gap-3">
        {items.map((item) => (
          <Button
            key={item.name}
            variant={selectedItem === item.name ? "primary" : "light"}
            onClick={() => handleClick(item)}
            style={{
              width: "200px",
              height: "50px",
              fontSize: "14px",
              borderRadius: "8px",
              textAlign: "left",
              paddingLeft: "15px",
              ...buttonStyle,
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ListGroup;
