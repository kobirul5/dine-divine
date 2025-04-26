// pages/Dashboard.js
import { FaUtensils, FaShoppingCart, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <FaUtensils className="w-8 h-8 text-primaryColor mr-4" />
          <div>
            <p className="text-gray-500">Total Menu Items</p>
            <p className="text-2xl font-bold">45</p>
          </div>
        </div>
        
        {/* Add similar cards for other stats */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          {/* Add orders table */}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Upcoming Reservations</h3>
          {/* Add reservations list */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;