import React from 'react';
import { Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">

      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
