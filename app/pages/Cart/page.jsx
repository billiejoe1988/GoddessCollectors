"use client"
import React, { Suspense } from 'react';
import CartItem from "@/components/cart/CartItem"
import { useCartContext } from "@/components/context/CartContext"

const Cart = () => {
  const { cart } = useCartContext()

  return (
      <main className="container m-auto">
          <h2 className="text-2xl my-10 border-b pb-4">Your Order</h2>
        
          <Suspense fallback={<div>... Loading </div>}>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug}/>)
                }
            </ul>
          </Suspense>
      </main>
  )
}

export default Cart
