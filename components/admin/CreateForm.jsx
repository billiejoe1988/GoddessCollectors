"use client"
import { useState } from "react"
import Button from "../ui/Button"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"

const createProduct = async (values, file) => {
    try {
        const storageRef = ref(storage, `images/${values.slug}`);
        await uploadBytes(storageRef, file);
        

        const fileURL = await getDownloadURL(storageRef);
        

        const docRef = doc(db, "products", values.slug);
        await setDoc(docRef, {
            ...values,
            image: fileURL
        });
        
        alert("Product created");
    } catch (error) {
        alert("Error update product:", error);
    }
};

const CreateForm = () => {
    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        instock: 0,
        price: 0, 
        type: '', 
        slug: '' 
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }

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

               <label style={{ color: 'white' }}>Img: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label style={{ color: 'white' }}>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
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
                <Button type="submit">Add</Button>
            </form>
        </div>
    )
}

export default CreateForm
