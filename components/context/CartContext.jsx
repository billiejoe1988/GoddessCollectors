'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } else {
            return [];
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (slug) => {
        setCart(cart.filter(item => item.slug !== slug));
    };

    const updateCartItem = (itemId, quantity) => {
        setCart(cart.map(item => item.itemId === itemId ? { ...item, quantity } : item));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, clearCart, totalQty }}>
            {children}
        </CartContext.Provider>
    );
};
