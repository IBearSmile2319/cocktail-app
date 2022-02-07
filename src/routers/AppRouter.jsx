import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import Home from '../pages/Home';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<PublicRouter isAuth={false} />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<CartPage />} />
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default AppRouter;
