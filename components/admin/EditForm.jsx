"use client"
import { useState } from "react";
import Button from "../ui/Button";
import { db, storage } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditForm = ({ item }) => {
    const { title, description, instock, price, type, img, slug } = item;
    const [values, setValues] = useState({ title, description, instock, price, type });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let fileURL = img; // Use current image URL if no new image is provided

        if (file) {
            const storageRef = ref(storage, slug);
            const fileSnapshot = await uploadBytes(storageRef, file);
            fileURL = await getDownloadURL(fileSnapshot.ref);
        }

        const docRef = doc(db, "products", slug);
        await updateDoc(docRef, {
            title: values.title,
            description: values.description,
            instock: Number(values.instock),
            price: Number(values.price),
            type: values.type,
            img: fileURL
        });

        console.log("Producto actualizado correctamente");
    };

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label style={{ color: 'white' }}>Name: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label style={{ color: 'white' }}>Current Img: </label>
                <img src={img} alt="Current Product Image" className="block my-4" />

                <label style={{ color: 'white' }}>New Img: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label style={{ color: 'white' }}>Price: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label style={{ color: 'white' }}>Stock: </label>
                <input
                    type="number"
                    value={values.instock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="instock"
                    onChange={handleChange}
                />

                <label style={{ color: 'white' }}>Category: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label style={{ color: 'white' }}>Description: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Button type="submit">Save</Button>
            </form>
        </div>
    );
};

export default EditForm;

