import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Home/Header';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;