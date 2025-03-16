import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#FAF3E0] to-[#E5C9A8] shadow-md z-50 px-6 py-4 flex justify-between items-center">

      
      <div className="flex items-center space-x-1">
        <img 
          src="/123.png" 
          alt="Logo"
          className="h-10 w-auto" 
        />
        <h1 className="text-2xl font-extrabold text-[#4f2012] tracking-wider">
          Communion Hub
        </h1>
      </div>

      
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-[#4f2012] focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

  
      <div className={`flex-col lg:flex lg:flex-row lg:space-x-16 absolute lg:static bg-gradient-to-r from-[#FAF3E0] to-[#E5C9A8] w-full left-0 lg:w-auto top-16 lg:top-0 p-4 lg:p-0 ${menuOpen ? 'flex' : 'hidden'} lg:items-center`}>
        <Link
          className="block lg:inline-block text-[#4f2012] font-bold hover:text-[#f1496b] transition-all mb-4 lg:mb-0"
          to="/"
          onClick={() => setMenuOpen(false)} 
        >
          Home
        </Link>
        <Link
          className="block lg:inline-block text-[#4f2012] font-bold hover:text-[#f1496b] transition-all"
          to="/events"
          onClick={() => setMenuOpen(false)} 
        >
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
