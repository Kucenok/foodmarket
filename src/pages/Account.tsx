import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import "../styles/account.css";

const Account: React.FC = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    if (!token) {
        return (
            <div className="account-container">
                <h1>Please Log In or Register!</h1>
                <p>ㅤ</p>
                <Link to="/login" className="account-logout-button">Login</Link>
                <p>ㅤ</p>
                <Link to="/register" className="account-logout-button">Register</Link>
            </div>
        );
    }

    return (
        <div className="account-container">
            <h1>Welcome, {username || 'Guest'}!</h1>
            <button onClick={logout} className="account-logout-button">Logout</button>
        </div>
    );
};

export default Account;
