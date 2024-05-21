import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, clearCart, increaseQuantity, decreaseQuantity } from '../redux/store'; // Импортируйте новые действия
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCutlery, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

interface LinkItem {
    name: string;
    path: string;
    icon: any;
}

interface CartItem {
    id: string;
    name: string;
    quantity: number;
}

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [showCartDropdown, setShowCartDropdown] = useState<boolean>(false);
    const cartItems = useSelector((state: RootState) => state.cart.items as CartItem[]);
    const dispatch = useDispatch();
    const location = useLocation();
    const links: LinkItem[] = [
        { name: "Main", path: "/", icon: faHome },
        { name: "Menu", path: "/recipes", icon: faCutlery },
        { name: "Account", path: "/account/:username", icon: faUser }
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    function toggleCartDropdown() {
        setShowCartDropdown(!showCartDropdown);
    }

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">F<span>OO</span>dRest</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>
                            <FontAwesomeIcon icon={link.icon} /> {link.name}
                        </Link>
                    ))}
                </div>
                <div className="cart-icon" onClick={toggleCartDropdown}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItems.length > 0 && (
                        <span className="cart-badge">{cartItems.length}</span>
                    )}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
            {showCartDropdown && (
                <div className="cart-dropdown">
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.quantity}
                                <button onClick={() => dispatch(increaseQuantity(item.id))} className="quantity-btn increase-btn">+</button>
                                <button onClick={() => dispatch(decreaseQuantity(item.id))} className="quantity-btn decrease-btn">-</button>
                            </li>
                        ))}
                    </ul>
                    {cartItems.length > 0 && (
                        <>
                            <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">
                                Clear Cart
                            </button>
                            <p>Total items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
                        </>
                    )}
                    {cartItems.length === 0 && <p>Your cart is empty.</p>}
                </div>
            )}
        </>
    );
}
