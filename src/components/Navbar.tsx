const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-50 w-full bg-white/100 backdrop-blur-2xl px-[80px] py-[10px]">
        <div className="flex h-16 items-center">
            
          <div className="flex-shrink-0">
            <img src="src/assets/MakitLabs_Logo.png" alt="Makit Labs Logo" className=" h-35 w-auto" />
          </div>

          <div className="ml-auto flex items-center space-x-8 font-default text-lg">
            <a href="#" className="hover:text-primary transition duration-300">About Us</a>
            <a href="#" className="hover:text-primary transition duration-300">Courses</a>
            <a href="#" className="hover:text-primary transition duration-300">Products</a>
            <a href="#" className="hover:text-primary transition duration-300">+977-9841671676</a>
            <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>Enroll Now</span>
            <span className="tracking-tighter font-mono">&gt;&gt;</span>
            </button>
          </div>
        
        </div>
    </nav>
  );
};

export default Navbar;
