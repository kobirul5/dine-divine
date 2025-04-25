// components/Sidebar.js
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi';
import { 
  FaUser, FaUtensils, FaShoppingCart, FaCalendarAlt, FaUsersCog, FaCog 
} from 'react-icons/fa';

const Sidebar = ({ userRole, sidebarOpen, setSidebarOpen }) => {
  const userLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaUser /> },
    { name: 'Menu', path: '/dashboard/menu', icon: <FaUtensils /> },
    { name: 'Orders', path: '/dashboard/orders', icon: <FaShoppingCart /> },
    { name: 'Reservations', path: '/dashboard/reservations', icon: <FaCalendarAlt /> },
    { name: 'Profile', path: '/dashboar/profile', icon: <FaUser /> },
  ];

  const adminLinks = [
    ...userLinks,
    { name: 'Staff', path: '/staff', icon: <FaUsersCog /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  const links = userRole === 'admin' ? adminLinks : userLinks;

  return (
    <>
      <div className={`fixed md:sticky inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">Restaurant Dashboard</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <FiX className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center p-3 mb-2 rounded-lg hover:bg-blue-100 text-gray-700 hover:text-blue-600"
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu button */}
      <button 
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg"
      >
        <FiMenu className="h-6 w-6" />
      </button>
    </>
  );
};

export default Sidebar;