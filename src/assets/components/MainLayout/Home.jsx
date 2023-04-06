import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../HEADER/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;