import { useState } from 'react';
import Sidebar from '../pages/Dashboard/Shared/Sidebar';
import Header from '../pages/Dashboard/Shared/Header';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const userRole = "admin"
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar userRole={userRole} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout