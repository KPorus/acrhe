import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Head from '../component/Head';
import Nav from '../component/Nav';

const Main = () => {
    return (
        <div>
            <Head></Head>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;