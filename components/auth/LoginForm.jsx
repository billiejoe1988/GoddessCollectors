"use client"
import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../ui/Button"; 
import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(values);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-5 rounded m-5">
                <h2 className="text-center mb-4 text-xl font-semibold">Admin Panel</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Email"
                    className="p-2 rounded border mx-5 border-blue-100 block my-2 px-5"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Password"
                    className="p-2 rounded mx-5 border border-blue-100 block my-2 px-5"
                    name="password"
                    onChange={handleChange}
                />
                <div className="flex justify-between px-5 py-5">
                    <CustomButton onClick={() => loginUser(values)} className="w-1/2 mr-2">Log In</CustomButton> 
                    <CustomButton onClick={() => registerUser(values)} className="w-1/2">Sign Up</CustomButton>
                    <CustomButton onClick={googleLogin} className="w-1/2">Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
