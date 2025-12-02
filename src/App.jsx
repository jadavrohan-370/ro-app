import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import WaterQuality from './pages/WaterQuality';
import FilterHealth from './pages/FilterHealth';
import Service from './pages/Service';
import Profile from './pages/Profile';
import Store from './pages/Store';
import Cart from './pages/Cart';
import AMCPlans from './pages/AMCPlans';
import DeviceConnect from './pages/DeviceConnect';
import Notifications from './pages/Notifications';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quality" element={<WaterQuality />} />
            <Route path="filters" element={<FilterHealth />} />
            <Route path="service" element={<Service />} />
            <Route path="profile" element={<Profile />} />
            <Route path="store" element={<Store />} />
            <Route path="cart" element={<Cart />} />
            <Route path="amc" element={<AMCPlans />} />
            <Route path="connect" element={<DeviceConnect />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
