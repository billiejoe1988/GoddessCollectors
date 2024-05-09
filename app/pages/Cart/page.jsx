'use client'
import React, { Suspense } from 'react';
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "@/components/context/CartContext";
import Button from "@/components/ui/Button"
import CartForm from "@/components/cart/CartFrom"

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <main className="container m-auto min-h-full mb-6">
      <h2 className="text-4xl my-10 border-b pb-4 text-orange-400">Your Order</h2>

      <Suspense fallback={<div className='text-orange-400'>... Loading </div>}>
        <ul>
          {cart.map((item) => (
            <CartItem item={item} key={item.slug} />
          ))}
        </ul>

      </Suspense>
      <div className="flex justify-between items-center mb-6 py-8">
        <Button className="bg-red-500 hover:bg-red-600" onClick={clearCart}>Empty Cart</Button>
        <h3 className="text-2xl text-white my-6">Total: ${calculateTotal()}</h3>
      </div>
      <CartForm/>
    </main>
  );
};

export default Cart;
