'use client'
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const isInCart = (slug) =>{
        return cart.some(item => item.slug === slug)
    }

    const removeFromCart = (slug) => {
        setCart(cart.filter(item => item.slug !== slug));
    };

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
    };

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const emptyCart = () => {
       setCart ([])
    }

    return (
        <CartContext.Provider value={{addToCart, cart, isInCart, totalQty, emptyCart, removeFromCart, setCart, updateCart}}>
            {children}
        </CartContext.Provider>
    );
};

