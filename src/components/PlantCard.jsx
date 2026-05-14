import React from "react";
import { useState } from "react";

function PlantCard() {
  const [inStock, setIsInStock] = useState(true);
  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!setIsInStock)}>{isInStock ? "In Stock" : "Out of Stock"}</button>
      )}
    </li>
  );
}

export default PlantCard;
