import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, increaseQuantity, decreaseQuantity, removeFromCart } from './store';

const CartComponent: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.length > 0 ? (
                items.map((item) => (
                    <div key={item.id}>
                        <span>{item.name} - Quantity: {item.quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartComponent;
