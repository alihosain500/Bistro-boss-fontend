import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../pages/Home/Home/Shared/Navbar/Navbar';



const Main = () => {
    const location = useLocation();
    
    const noHeaderfooter = location.pathname.includes('login') ||
    location.pathname.includes('signup')
    return (
        <div>
            {noHeaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderfooter|| <Footer></Footer>}


        </div>
    );
};

export default Main;