'use client'
import React, { useState } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Button";

interface Item {
  instock: number;
  stock: number;
}

interface QtySelectorProps {
  item: Item;
}

const QtySelector: React.FC<QtySelectorProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (quantity <= item.instock) {
      console.log({
        ...item,
        quantity,
      });
    } else {
      console.log("Stock empty");
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
      <Button onClick={handleAdd}>Añadir al carrito</Button>
    </div>
  );
};

export default QtySelector;
