import React from 'react';
import { ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const products = [
    { id: 1, name: 'Sediment Filter', price: 499, image: 'https://via.placeholder.com/100?text=Sediment' },
    { id: 2, name: 'Pre-Carbon Filter', price: 599, image: 'https://via.placeholder.com/100?text=Carbon' },
    { id: 3, name: 'RO Membrane', price: 1299, image: 'https://via.placeholder.com/100?text=Membrane' },
    { id: 4, name: 'UV Lamp', price: 899, image: 'https://via.placeholder.com/100?text=UV+Lamp' },
    { id: 5, name: 'Mineral Cartridge', price: 350, image: 'https://via.placeholder.com/100?text=Mineral' },
];

const Store = () => {
    const { cart, addToCart } = useApp();
    const navigate = useNavigate();

    return (
        <div className="page fade-in">
            <header className="flex-between mb-6">
                <h2>Store</h2>
                <div
                    className="icon-btn"
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => navigate('/cart')}
                >
                    <ShoppingBag size={24} />
                    {cart.length > 0 && <span className="badge">{cart.length}</span>}
                </div>
            </header>

            <div className="grid-2" style={{ gap: '16px' }}>
                {products.map((product) => (
                    <div key={product.id} className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '80px', height: '80px', background: '#F3F4F6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for 3D Model/Image */}
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{product.name}</h4>
                            <p className="text-primary" style={{ fontWeight: 600 }}>₹{product.price}</p>
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '8px', fontSize: '12px' }}
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
