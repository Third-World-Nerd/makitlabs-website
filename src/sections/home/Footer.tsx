import type { FC } from "react";
// Assuming you have SVG icons for social media (e.g., from lucide-react or similar)
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube} from 'lucide-react'; 

const Footer: FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white font-default flex flex-col items-center">
      
      {/* 1. Top CTA Banner (Purple Bar) */}
      <div className="absolute z-10 -mt-30 px-[5%] 2xl:px-[15%]"> 
        <div className="bg-primary py-10 px-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl xl:text-7xl mb-8 text-white">
            Want to know more? <span className="font-bold">Let's chat</span>
          </h2>
          <button
            className="border mt-7 text-xl text-purple-600 bg-white px-4 py-2 rounded-full w-max cursor-pointer hover:bg-primary hover:text-white transition duration-300"
          >
            Contact Our Team<span className="tracking-tighter font-mono pl-2">&gt;&gt;</span>
          </button>
        </div>
      </div>

      {/* 2. Main Footer Content (Columns) */}
      <div className="pt-50 pb-16 px-[5%] 2xl:px-[15%] text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and About/Services */}
          <div>

            <img src="/photo/logo/MakitLabs_Logo.png" alt="Makit Labs Logo" className="items-start h-36" />

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
            <ul className="space-y-3 text-sm ">
              <li className="flex items-center hover:text-white transition">
                <Phone className="w-4 h-4 mr-2 text-white" />
                <a
                href="https://wa.me/9779767470587?text=I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                >+977-9767470587</a>
              </li>
              <li className="flex items-center hover:text-white transition">
                <Mail className="w-4 h-4 mr-2 text-white" />
                <a
                href="mailto:makitnepal@gmail.com"
                target="_blank"
                >makitnepal@gmail.com</a>
              </li>
              {/* Social Icons */}
              <li className="flex space-x-4 pt-2">
                <a href="https://facebook.com/61575099465786" target="_blank" aria-label="Facebook" className="hover:text-white transition"><Facebook className="w-5 h-5" /></a>
                <a href="https://instagram.com/makit.labs" target="_blank" aria-label="Instagram" className="hover:text-white transition"><Instagram className="w-5 h-5" /></a>
                <a href="https://tiktok.com/@makit.labs" target="_blank" aria-label="Tiktok" className="hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"> <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>
                </a>
                <a href="https://youtube.com/@thirdworldnerd" target="_blank" aria-label="YouTube" className="hover:text-white transition"><Youtube className="w-5 h-5" /></a>
              </li>
            </ul>
            
            {/* Location */}
            <h3 className="text-white text-lg font-semibold mt-8 mb-4">Location</h3>
            <div className="flex text-sm hover:text-white transition">
                <MapPin className="w-4 h-4 mr-2 text-white flex-shrink-0 mt-1" />
                <a
                href="https://maps.app.goo.gl/nEoqWGoAAeWnZZ6R7"
                target="_blank"
                >
                    Cosmic Innovation Center<br/>
                    Sanepa Marg, Kathmandu<br/>
                    Opposite to Norwegian Embassy
                </a>
            </div>
          </div>

          {/* Column 4: Image/Video Thumbnail */}
          <div>
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden relative">
              {/* Placeholder Image/Video Thumbnail */}
              <div className="w-full max-w-3xl mx-auto aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/0DCpCSC6Efc"
                  title="Students working on a project"
                  className="w-full h-full rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

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
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        &copy; 2025 MakitLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;