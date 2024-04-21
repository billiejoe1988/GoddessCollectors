'use client'
import React from 'react';
import Button from '../ui/Button';
import { useCartContext } from '../context/CartContext';

const CartCounter = ({ itemId, counter, max }) => {
    const { removeFromCart, restarFromCart, increaseInCart } = useCartContext();

    return (
        <div className="flex items-center gap-3 rounded">
            <Button onClick={() => increaseInCart(itemId)}> + </Button>
            <p>{counter}</p>
            <Button onClick={() => restarFromCart(itemId)}> - </Button>
        </div>
    );
};

export default CartCounter;
