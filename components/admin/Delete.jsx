'use client'
import { useState } from "react";
import Button from "../ui/Button";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const deleteProduct = async (slug) => {
    try {
        const productRef = doc(db, "products", slug);
        await deleteDoc(productRef);
        alert("Product deleted");
        window.location.reload(); 
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

const DeleteButton = ({ slug }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await deleteProduct(slug);
        }
    }

    return (
        <Button onClick={handleDelete}>Delete</Button>
    );
}

export default DeleteButton;
