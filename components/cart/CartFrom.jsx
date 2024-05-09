"use client"
import { useState } from "react"
import Button from "../ui/Button"
import { useCartContext } from "../context/CartContext"
import { db } from "@/firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"


const createOrder = async (values, items, clearCart) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await setDoc(orderRef, order)

    clearCart();

    return docId
}


const CartForm = () => {
    const { cart, clearCart } = useCartContext()

    const [values, setValues] = useState({
        email: '',
        adress: '',
        name: ''
    })

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart, clearCart)

        alert("Congratulations! Your purchase was successful!")
    }

    return (
        <div className="my-12">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="text-white mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        placeholder="Name"
                        className="p-2 rounded border border-blue-100"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="adress" className="text-white mb-2">Adress</label>
                    <input
                        type="text"
                        id="adress"
                        required
                        placeholder="Adress"
                        className="p-2 rounded border border-blue-100"
                        name="adress"
                        value={values.adress}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="text-white mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="Email"
                        className="p-2 rounded border border-blue-100"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit" className="bg-green-500 hover:bg-green-600">
                    CheckOut
                </Button>
            </form>
        </div>
    )
}

export default CartForm
