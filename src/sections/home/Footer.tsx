import type { FC } from "react";
// Assuming you have SVG icons for social media (e.g., from lucide-react or similar)
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'; 

const Footer: FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white font-default">
      
      {/* 1. Top CTA Banner (Purple Bar) */}
      <div className="absolute z-10 -mt-20 px-[440px] "> 
        <div className="bg-primary py-10 px-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl md:text-6xl mb-8 text-white">
            Want to know more, <span className="font-bold">Let's chat</span>
          </h2>
          <button
            className="border mt-7 text-xl text-purple-600 bg-white px-4 py-2 rounded-full w-max cursor-pointer hover:bg-primary hover:text-white transition duration-300"
          >
            Contact Our Team<span className="tracking-tighter font-mono pl-2">&gt;&gt;</span>
          </button>
        </div>
      </div>

      {/* 2. Main Footer Content (Columns) */}
      <div className="pt-62 pb-16 px-[440px] text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and About/Services */}
          <div>
            <div className="flex items-center mb-6">
              {/* Logo/Image Placeholder */}
              <div className="w-8 h-8 mr-2 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="text-2xl font-bold text-white">MAKIT <span className="text-orange-500">LABS</span></span>
            </div>

            <p className="mb-4 text-sm">
              In short we are a group of Engineers and Educators who provide:
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm ml-2">
              <li className="text-white font-semibold">Two Services</li>
              <ul className="list-none ml-5 space-y-1 text-gray-400">
                <li>a. Weekly STEAM classes</li>
                <li>b. Robotics, AI and Coding Bootcamps at Schools and Colleges</li>
              </ul>
              <li className="text-white font-semibold">One Product</li>
              <ul className="list-none ml-5 space-y-1 text-gray-400">
                <li>a. Kits and Digital Platform to practically learn STEAM concepts</li>
              </ul>
            </ul>
            
            <p className="mt-4 text-sm">
              And make sure to check our youtube channel <span className="font-semibold text-white">Third World Nerd</span> where we blend technology with humor to simultaneously provide both education and entertainment.
            </p>
          </div>

          {/* Column 2: Information Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Our Products</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us & Location */}
          <div className="col-span-1">
            {/* Contact Us */}
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-white" />
                <span>+977-9841671676</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-white" />
                <span>makitnepal@gmail.com</span>
              </li>
              {/* Social Icons */}
              <li className="flex space-x-4 pt-2">
                <a href="#" aria-label="Facebook" className="hover:text-white transition"><Facebook className="w-5 h-5" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram className="w-5 h-5" /></a>
                <a href="#" aria-label="YouTube" className="hover:text-white transition"><Youtube className="w-5 h-5" /></a>
              </li>
            </ul>
            
            {/* Location */}
            <h3 className="text-white text-lg font-semibold mt-8 mb-4">Location</h3>
            <div className="flex text-sm">
                <MapPin className="w-4 h-4 mr-2 text-white flex-shrink-0 mt-1" />
                <p>
                    Cosmic Innovation Center<br/>
                    Sanepa Marg, Kathmandu<br/>
                    Opposite to Norwegian Embassy
                </p>
            </div>
          </div>

          {/* Column 4: Image/Video Thumbnail */}
          <div>
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden relative">
              {/* Placeholder Image/Video Thumbnail */}
              <img 
                src="https://via.placeholder.com/300x200?text=Video+Placeholder" // Replace with a real video thumbnail URL
                alt="Students working on a project" 
                className="w-full h-full object-cover opacity-70"
              />
              {/* Play Button Overlay - Centralized */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-white fill-current opacity-90 hover:opacity-100 transition cursor-pointer" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Copyright Section */}
      <div className="border-t border-gray-800 py-6 px-[440px] text-center text-sm text-gray-500">
        &copy; 2025 MakitLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;