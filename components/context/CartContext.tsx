'use client'
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export const useCartContext = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (item: any) => {
        setCart([...cart, item]);
    };

    return (
        <CartContext.Provider value={addToCart}>
            {children}
        </CartContext.Provider>
    );
};
