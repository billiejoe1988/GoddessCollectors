'use client'
import React, { useState, useContext } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Button";
import { userCartContext } from '../context/CartContext'

interface Item {
  instock: number;
  stock: number;
}

interface QtySelectorProps {
  item: Item;
}

const QtySelector: React.FC<QtySelectorProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(userCartContext);

  const handleAdd = () => {
    addToCart({
      ...item,
      quantity
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      <Counter max={item.instock} counter={quantity} setCounter={setQuantity} />
      <Button onClick={handleAdd}>Add to Cart</Button>
    </div>
  );
};

export default QtySelector;
