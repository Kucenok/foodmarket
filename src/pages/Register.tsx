import React, { useState } from 'react';
import axios from 'axios';
import '../styles/regform.css';
import {Link} from "react-router-dom";
interface RegisterFormState {
    username: string;
    password: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormState>({ username: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', formData);
            console.log('User registered:', response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            window.location.href = `/account/${response.data.username}`;
        } catch (error: any) {
            console.error('Failed to register:', error.response?.data || error.message);
        }
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="formTitle">Register</h2> {/* Заголовок формы */}
                <div className="inputGroup">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="inputGroup">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" className="button">Register</button>
                <Link to="/login" className="linkButton">Уже есть аккаунт? Нажмите, чтобы войти</Link>
            </form>
        </div>
    );
};

export default Register;
