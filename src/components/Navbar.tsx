import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-lg hover:text-primary transition duration-300"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md px-[4%] py-2 font-default overflow-x-hidden">
      <div className="flex h-16 items-center justify-between">
        
        {/* ✅ Smaller logo in mobile */}
        <div className="flex-shrink-0">
          <img 
            src="/photo/logo/MakitLabs_Logo.png" 
            alt="Makit Labs Logo" 
            className="h-14 w-auto sm:h-20" 
          />
        </div>

        {/* Desktop links */}
        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8">
          <NavLink href="#WhoAreWe">About Us</NavLink>
          <NavLink href="#Courses">Courses</NavLink>
          <NavLink href="#">Products</NavLink>
          <a 
            className="text-primary text-xl hover:scale-110 cursor-pointer transition duration-300"
            href="https://wa.me/9779767470587?text=I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
            target="_blank"
          >
            +977-9767470587
          </a>
          <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>Enroll Now</span>
            <span className="tracking-tighter font-mono">&gt;&gt;</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center"
        >
          {isOpen ? (
            <XMarkIcon className="text-primary h-8 w-8" />
          ) : (
            <Bars3Icon className="text-primary h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          ${isOpen ? "max-h-screen pt-4 pb-4" : "max-h-0 overflow-hidden"}
          lg:hidden transition-all duration-300 ease-in-out
        `}
      >
        <div className="flex flex-col space-y-4 items-start">
          <NavLink href="#WhoAreWe">About Us</NavLink>
          <NavLink href="#Courses">Courses</NavLink>
          <NavLink href="#">Products</NavLink>
          <a 
            className="text-primary text-xl hover:scale-110 cursor-pointer transition duration-300"
            href="https://wa.me/9779767470587?text=I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
            target="_blank"
          >
            +977-9767470587
          </a>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>Enroll Now</span>
            <span className="tracking-tighter font-mono">&gt;&gt;</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
