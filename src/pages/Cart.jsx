import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useApp();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="page fade-in">
            <h2 className="mb-6">Shopping Cart</h2>

            {cart.length === 0 ? (
                <div className="text-center" style={{ padding: '60px 20px' }}>
                    <ShoppingBag size={64} color="#E5E7EB" style={{ margin: '0 auto 20px' }} />
                    <h3 className="mb-2">Your cart is empty</h3>
                    <p className="text-secondary mb-6">Add some filters to get started!</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/store')}
                    >
                        Browse Store
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid-1" style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
                        {cart.map((item, index) => (
                            <div key={index} className="card flex-between">
                                <div className="flex-center" style={{ gap: '12px' }}>
                                    <div style={{ width: '60px', height: '60px', background: '#F3F4F6', borderRadius: '8px' }}>
                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{item.name}</h4>
                                        <p className="text-primary" style={{ fontWeight: 600 }}>₹{item.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    <Trash2 size={20} color="#FF4D4F" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="card mb-6">
                        <div className="flex-between mb-2">
                            <span>Subtotal</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="flex-between mb-2">
                            <span>Delivery</span>
                            <span className="text-accent">FREE</span>
                        </div>
                        <div className="flex-between" style={{ paddingTop: '12px', borderTop: '1px solid #E5E7EB', fontWeight: 600, fontSize: '18px' }}>
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => alert('Proceeding to checkout...')}
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
