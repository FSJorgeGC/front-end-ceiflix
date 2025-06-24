import React, { useState } from "react";
import axios from "axios";


export const Login  = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/login", {
            email,
            password,
            });

            const { token, data } = response.data;
            console.log("Login successful:", data);
            localStorage.setItem("token", token);
            alert(`Bienvenido ${data.name}`);
            // Redireccionar o guardar el estado global del usuario

        } catch (error) {
            console.error(error.response?.data?.msg || error.message);
            alert(error.response?.data?.msg || "Login failed");
        }
    };


    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        <div className="form-group">
            <a href="/register">Don't have an account? Register</a>
        </div>
        <div className="form-group">
            <a href="/forgot-password">Forgot Password?</a>
        </div>  
    </form>

    );
}