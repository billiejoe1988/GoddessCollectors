import Button from "../ui/Button"
import Image from "next/image"
import { useCartContext } from "../context/CartContext"
import CartCounter from '../ui/CartCounter'

const CartItem = ({item}) => {

    const { removeFromCart } = useCartContext();

    const handleRemoveItem = () => {
        removeFromCart(item.slug);
    };

    return (
        <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4 bg-white rounded">
            <Image
                src={item.img}
                alt={item.title}
                width={80}                
                height={80}                
            />
            <div>
                <h3>{item.title}</h3>
                <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
            </div>

            <div>
               <CartCounter itemId={item.slug} counter={item.quantity} max={10} />
            </div>

            <Button className="bg-red-600" onClick={handleRemoveItem}>
                <Image
                    src={'/trash.png'}
                    alt="Trash icon"
                    width={30}
                    height={30}
                />
            </Button>
        </li>
    )
}

export default CartItem