"use client"
import Link from "next/link"
import { useCartContext } from "../context/CartContext"
import Image from "next/image"

const CartWidget = () => {
    const { totalQty } = useCartContext();

    return (
        <Link href="/pages/Cart" className="text-base text-slate-100 p-3 flex items-center">
            <Image 
               src="/cart.png"
               alt="Cart Icon"
               width={50}
               height={50}
            />
            <span className="text-white px-3">{totalQty()}</span>
        </Link>
    );
};

export default CartWidget;
