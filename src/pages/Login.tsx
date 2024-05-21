import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/regform.css';

interface LoginFormState {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormState>({ username: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', formData);
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', formData.username);
            window.location.href = `/account/${formData.username}`;
        } catch (error: any) {
            console.error('Failed to login:', error.response?.data || error.message);
        }
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="formTitle">Login</h2>
                <div className="inputGroup">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="inputGroup">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" className="button">Login</button>
                <Link to="/register" className="linkButton">Нет аккаунта? Зарегистрируйтесь</Link>
            </form>
        </div>
    );
};

export default Login;
