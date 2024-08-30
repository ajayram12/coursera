import "./Login1.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert('Login successful!');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={contact} 
                        onChange={(e) => setContact(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="signup-redirect">
                <p>Don't have an account? <button onClick={() => navigate('/signup')} className="btn btn-link">Sign Up</button></p>
            </div>  
        </div>
    );
}

export default Login;
