import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Filter Life Low', message: 'Sediment filter is at 20%. Order a replacement soon.', type: 'warning', date: '2 hours ago' },
        { id: 2, title: 'Service Due', message: 'Your quarterly maintenance is due in 3 days.', type: 'info', date: '1 day ago' },
    ]);
    const [user, setUser] = useState({
        name: 'Rahul Sharma',
        deviceConnected: true,
        amcPlan: 'Gold Plan',
    });

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const addNotification = (notification) => {
        setNotifications([notification, ...notifications]);
    };

    return (
        <AppContext.Provider value={{ cart, addToCart, removeFromCart, notifications, addNotification, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
