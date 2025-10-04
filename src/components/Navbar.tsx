import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // FIX #2 PART A: Lock body scroll when menu is open to keep the header fixed.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup function ensures scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // UX Improvement: Close menu when an anchor link is clicked
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      // Small timeout to allow the smooth scroll animation to begin first
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      className="text-lg hover:text-primary transition duration-300"
      onClick={handleNavLinkClick}
    >
      {children}
    </a>
  );

  return (
    // Navbar Header: Fixed and remains on top with shadow
    <nav className="fixed z-50 w-full bg-white/95 backdrop-blur-md font-default shadow-lg">
      <div className="flex h-20 items-center justify-between px-[4%]">
        {/* Ensure header height is adequate */}
        {/* Logo */}
        <div className="flex-shrink-0 hover:cursor-pointer">
          <Link to="/" title="Makit Labs Home">
            <img
              src="/photo/logo/MakitLabs_Logo.png"
              alt="Makit Labs Logo"
              className="w-24 sm:w-32 h-auto"
            />
          </Link>
        </div>
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8">
          <NavLink href="/#WhoAreWe">About Us</NavLink>
          <NavLink href="/#Courses">Courses</NavLink>
          <NavLink href="/#Products">Products</NavLink>
          {/* Added #Products for consistent anchor link */}
          {/* WhatsApp Link */}
          <a
            className="text-primary text-xl font-semibold hover:scale-105 cursor-pointer transition duration-300"
            href="https://wa.me/9779767470587?text=I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            +977-9767470587
          </a>
          {/* Enroll Button */}
          <button
            className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
            onClick={() => {
              navigate("/form");
            }}
          >
            <span>Enroll Now</span>
            <span className="tracking-tighter font-mono">&gt;&gt;</span>
          </button>
        </div>
        {/* Mobile Toggle Button (Fix #1: Using fixed h/w for reliable size) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 p-2 rounded-full hover:bg-gray-100 transition duration-150"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <XMarkIcon className="text-primary h-8 w-8" />
          ) : (
            <Bars3Icon className="text-primary h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay (Fix #2 Part B)
          - 'fixed' ensures it stays put when the body scroll is locked.
          - 'top-20' places it right below the main 80px header.
          - 'h-[calc(100vh-80px)]' ensures it only covers the remaining screen height.
          - 'translate-y-full' handles the slide-in/slide-out transition.
      */}
      <div
        className={`
          fixed top-20 left-0 w-full lg:hidden 
          bg-white shadow-xl h-[calc(100vh-80px)] overflow-y-auto 
          transition-transform duration-400 ease-in-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex flex-col space-y-6 p-6">
          {/* Navigation Links (mobile) */}
          <NavLink href="/#WhoAreWe">About Us</NavLink>
          <NavLink href="/#Courses">Courses</NavLink>
          <NavLink href="/#Products">Products</NavLink>

          {/* Contact & Enroll Block (mobile) */}
          <div className="pt-4 border-t border-gray-100 mt-6">
            <a
              className="text-primary text-xl font-semibold hover:scale-105 cursor-pointer transition duration-300 block mb-4"
              href="https://wa.me/9779767470587?text=I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              +977-9767470587
            </a>

            <button
              className="bg-primary text-white px-4 py-2 rounded-full space-x-2 hover:scale-105 transition-transform duration-300 shadow-md w-full cursor-pointer"
              onClick={() => {
                /* Handle enroll logic */ setIsOpen(false);
                navigate("/form");
              }}
            >
              <span>Enroll Now</span>
              <span className="tracking-tighter font-mono pl-2">&gt;&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
