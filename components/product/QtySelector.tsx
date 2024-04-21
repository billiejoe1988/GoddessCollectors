'use client'
import React, { useEffect, useState } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Button";
import { useCartContext } from '../context/CartContext';
import Link from "next/link"

interface Item {
  instock: number;
  stock: number;
  slug: string;
}

interface CartItem extends Item {
  quantity: number;
}

interface QtySelectorProps {
  item: Item;
}

const QtySelector: React.FC<QtySelectorProps> = ({ item }) => {
  const { cart, addToCart, updateCartItem } = useCartContext(); 
  const [quantity, setQuantity] = useState(1); 

  const isInCart = cart.some((cartItem: CartItem) => cartItem.slug === item.slug);
  
  const handleAdd = () => {
    addToCart({
        ...item,
        quantity
    })
  }

  return (
    <div className="flex flex-col gap-5 mt-6">
      {
        isInCart
        ? <Link
            href={"/pages/Cart"}
            className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center"
          >
            Buy
          </Link>
        : <>
            <Counter max={item.instock} counter={quantity} setCounter={setQuantity} />
            <div className="flex justify-between">
              <Button onClick={handleAdd} className="rounded my-3">Add to Cart</Button>
            </div>
          </>
      }
    </div>
  )
};

export default QtySelector;
