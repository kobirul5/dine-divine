// components/Header.js
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ setSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <button 
          onClick={() => setSidebarOpen(prev => !prev)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg"
          >
            <FaUserCircle className="w-8 h-8 text-gray-600" />
            <span>Kobirul Islam</span>
          </button>
          
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;