'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import ProfileCard from './components/ProfileCard';
import PersonalInfo from './components/PersonalInfo';
import TimeOff from './components/TimeOff';
import Documents from './components/Documents';
import Payroll from './components/Payroll';

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Fixed Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content (with padding based on sidebar state) */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'pl-40' : 'pl-[60px]'
        }`}
      >
        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TopNav />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ProfileCard />
            <PersonalInfo />
            <TimeOff />
            <Documents />
            <Payroll />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
