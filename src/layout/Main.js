import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Head from "../component/Head";
import Nav from "../component/Nav";

const Main = () => {
  return (
    <div>
      <Head></Head>
      <Nav></Nav>
      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
