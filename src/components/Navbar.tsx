import React, { useState } from 'react';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-lg hover:text-primary transition duration-300"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed z-50 w-full backdrop-blur-md px-[4%] py-[10px] font-default">
        <div className="flex h-16 items-center justify-between">
            
          <div className="flex-shrink-0">
            <img src="/photo/logo/MakitLabs_Logo.png" alt="Makit Labs Logo" className=" h-36 w-auto" />
          </div>

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8">
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Courses</NavLink>
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">+977-9841671676</NavLink>
            <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>Enroll Now</span>
            <span className="tracking-tighter font-mono">&gt;&gt;</span>
            </button>
          </div>

          <button
          onClick={toggleMenu}
          className='lg:hidden justify-end'
          >
            {isOpen ? (
              <XMarkIcon className='text-primary h-10 w-auto'/>
            ) : (
              <Bars3Icon className='text-primary h-10 w-auto'/>
            )}
          </button>
        </div>
        <div className={`
            ${isOpen ? 'max-h-screen pt-4 pb-4' : 'max-h-0 overflow-hidden'}
          lg:hidden transition-all duration-400 ease-in-out`}>
          <div className='flex flex-row justify-between items-end'>
            <div className='flex flex-col space-y-4'>
              <NavLink href="#">About Us</NavLink>
              <NavLink href="#">Courses</NavLink>
              <NavLink href="#">Products</NavLink>
              <NavLink href="#">+977-9841671676</NavLink>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-full space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>Enroll Now</span><span className="tracking-tighter font-mono">&gt;&gt;</span></button>    
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
