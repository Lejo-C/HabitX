import React from 'react';
const Dashboard = () => {
  return (
    <div className="bg-[#000000] min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-1/6 text-white p-6 border-r border-white-700 ">
        <div className="text-3xl font-bold font-oleo mb-10">
          HabitX
        </div>
        <nav className="space-y-4 font-semibold">
          <a href="#" className="block hover:text-black-400 px-6 py-2 rounded-lg bg-white text-black font-bold backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">Dashboard</a>
          <a href="#" className="block hover:text-black-400 px-6 py-2 rounded-lg bg-white text-black font-bold backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">Habits</a>
          <a href="#" className="block hover:text-black-400 px-6 py-2 rounded-lg bg-white text-black font-bold backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">Analytics</a>
          <a href="#" className="block hover:text-black-400 px-6 py-2 rounded-lg bg-white text-black font-bold backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">Settings</a>
        </nav>
      </div>

      {/* Right Content */}
      <div className="flex-1 text-white p-5">
        <div className='flex'>
        <button className='flex absolute mr-30 top-6 right-0 bg-white hover:text-black-400 px-2 py-1 rounded-sm bg-white text-black font-bold backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg'>Register</button>
        <button className='flex absolute mr-10 top-6 right-0 bg-black-800 hover:text-black-400 px-2 py-1 rounded-sm bg-black text-white font-bold backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-gray-800'>Login</button>
        </div>
        <div className="text-2xl font-bold mb-6">
          Progressions
        </div>
        {/* Progression Tracker Placeholder */}
        <div className="bg-gray-800 rounded-lg p-6 mt-10">
          <p className="text-gray-300">Your progression tracker will appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
