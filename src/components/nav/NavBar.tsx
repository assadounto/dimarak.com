'use client';
import React, { useState } from 'react';
import LogoSection from './LogoSection';
import NavLinks from './NavLinks';
import MobileMenuButton from './MobileMenuButton';
import Drawer from './MobileDrawer';
import SignInSignUpLinks from './SignInSignUpLinks';


const NavBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav className="h-[70px] fixed top-0 left-0 w-full flex items-center justify-between  dark:bg-dark border-b border-gray-200 dark:border-gray-600 px-8 z-50">
            <LogoSection />
            {/* <ProductDropdown /> */}
            <MobileMenuButton drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            <div className="hidden md:flex flex-1 justify-center">
                <NavLinks />
            </div>
            {/* <div className='hidden md:block'> <SignInSignUpLinks /></div> */}
            <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </nav>
    );
};

export default NavBar;
