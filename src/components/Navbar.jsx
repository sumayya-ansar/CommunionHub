import { Link } from "react-router-dom";

const Navbar = () => {
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
      <div className="space-x-16">
        <Link
          className="text-[#4f2012] font-bold hover:text-[#f1496b] transition-all"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-[#4f2012] font-bold hover:text-[#f1496b] transition-all"
          to="/events"
        >
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
