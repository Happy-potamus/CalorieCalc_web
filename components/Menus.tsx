import React from "react";
import Button from "./Button";

interface MenusProps {
  items: string[];
  heading?: string;
  onSelect?: (item: string) => void;
  selected?: string | null;
}

const Menus: React.FC<MenusProps> = ({
  items,
  heading,
  onSelect,
  selected,
}) => {
  return (
    <div>
      {heading && <h1 style={{ fontSize: "48px" }}>{heading}</h1>}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "row",
          gap: "12px",
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              cursor: "pointer",
              padding: "4px 8px",
              fontWeight: selected === item ? "bold" : "normal",
            }}
          >
            <Button
              variant={selected === item ? "primary" : "light"}
              style={{
                width: "355px",
                height: "50px",
                fontSize: "14px",
                borderRadius: "28px",
              }}
              onClick={() => {
                if (onSelect) onSelect(item);
              }}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menus;
