import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Calcul du total des articles dans le panier
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.cost, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <div>
                {cartItems.map((item) => (
                    <div key={item.name} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.cost}</p>
                            <div className="quantity-control">
                                <button onClick={() => dispatch(decrementItem(item.name))}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(incrementItem(item.name))}>+</button>
                            </div>
                            <p>Subtotal: ${(item.quantity * item.cost).toFixed(2)}</p>
                            <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
            <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    );
};

export default CartItem;
