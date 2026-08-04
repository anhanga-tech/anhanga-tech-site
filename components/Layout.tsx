import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import RouteMeta from './RouteMeta';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-anhanga-stone pl-12 md:pl-16 selection:bg-anhanga-lime selection:text-anhanga-dark relative overflow-hidden">
      <RouteMeta />

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-anhanga-lime/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-anhanga-accent/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <Sidebar />

      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
