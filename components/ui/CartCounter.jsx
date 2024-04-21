'use client'
import Button from './Button';
import { useCartContext } from '../context/CartContext';

const CartCounter = ({ itemId, counter, max }) => {
    const { addToCart, removeFromCart, cart } = useCartContext();

    const increase = () => {
        const itemInCart = cart.find(item => item.itemId === itemId);


        if (itemInCart && itemInCart.quantity < max) {
            const updatedCart = cart.map(item =>
                item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else if (!itemInCart) { 
            addToCart({ itemId, quantity: 1 });
        }
    };

    const decrease = () => {
        if (counter > 1) {
            const updatedCart = cart.map(item =>
                item.itemId === itemId ? { ...item, quantity: item.quantity - 1 } : item
            );
            setCart(updatedCart);
        } else {
            removeFromCart(itemId);
        }
    };

    return (
        <div className="flex items-center gap-3">
            <Button onClick={increase}> + </Button>
                <p>{counter}</p>
            <Button onClick={decrease}> - </Button>
        </div>
    );
};

export default CartCounter;

