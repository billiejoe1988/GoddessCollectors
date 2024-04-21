'use client'
import React from 'react';
import Button from '../ui/Button';
import { useCartContext } from '../context/CartContext';

const CartCounter = ({ itemId, counter, max }) => {
    const { addToCart, removeFromCart, updateCartItem, cart } = useCartContext();

    const increase = () => {
        const itemInCart = cart.find(item => item.itemId === itemId);

        if (itemInCart && itemInCart.quantity < max) {
            updateCartItem(itemId, itemInCart.quantity + 1);
        } else if (!itemInCart) { 
            addToCart({ itemId, quantity: 1 });
        }
    };

    const decrease = () => {
        if (counter > 1) {
            updateCartItem(itemId, counter - 1);
        } else {
            removeFromCart(itemId);
        }
    };

    return (
        <div className="flex items-center gap-3 rounded">
            <Button onClick={increase}> + </Button>
            <p>{counter}</p>
            <Button onClick={decrease}> - </Button>
        </div>
    );
};

export default CartCounter;
