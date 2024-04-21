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
        setCart([...cart, item])
    };

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const removeFromCart = (slug) => {
        setCart(cart.filter(item => item.slug !== slug));
    };

    const restarFromCart = (slug) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.slug === slug) {
                    const updatedQuantity = item.quantity - 1;
                    return updatedQuantity > 0 ? { ...item, quantity: updatedQuantity } : null;
                }
                return item;
            }).filter(Boolean); 
            return updatedCart;
        });
    };

    const increaseInCart = (slug) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.slug === slug) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
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
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, clearCart, totalQty, restarFromCart, increaseInCart }}>
            {children}
        </CartContext.Provider>
    );
};
