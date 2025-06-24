'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import { motion } from 'framer-motion';

export default function TimeOffPage() {
  const [isOpen, setIsOpen] = useState(true);

  const planningData = [
    {
      name: 'Emma Williams',
      specialization: 'UX Designer',
      profilePic: '/profilepic.jpg',
      days: { Wed: '9:00 AM – 5:00 PM' },
    },
    {
      name: 'Michael Brown',
      specialization: 'Engineer',
      profilePic: '/profilepic.jpg',
      days: { Thu: 'Holiday' },
    },
    {
      name: 'Olivia Brown',
      specialization: 'Product Manager',
      profilePic: '/profilepic.jpg',
      days: {},
    },
    {
      name: 'Ethan Martin',
      specialization: 'Support',
      profilePic: '/profilepic.jpg',
      days: {
        Mon: '9:00 AM – 5:00 PM',
        Wed: '9:00 AM – 5:00 PM',
        Fri: 'Holiday',
      },
    },
    {
      name: 'Michael Murtill',
      specialization: 'HR',
      profilePic: '/profilepic.jpg',
      days: { Tue: 'Holiday' },
    },
  ];

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`transition-all duration-300 ${
          isOpen ? 'pl-50' : 'pl-[60px]'
        } p-6`}
      >
        <TopNav />

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-black mb-6"
        >
          Employee Planning
        </motion.h1>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-4 items-center mb-4"
        >
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Location:</label>
            <select className="border border-gray-300 rounded px-3 py-2 text-sm">
              <option>London</option>
              <option>New York</option>
              <option>Berlin</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">People:</label>
            <select className="border border-gray-300 rounded px-3 py-2 text-sm">
              <option>All</option>
              <option>Support</option>
              <option>Engineering</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
            + Add People
          </button>
          <div className="ml-auto flex gap-2 items-center">
            <span className="text-sm text-gray-700">Apr 8 – 12, 2024</span>
            <button className="border border-gray-300 px-3 py-2 rounded text-sm">Today</button>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-x-auto bg-white shadow rounded border border-gray-200"
        >
          <table className="min-w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                <th className="p-4 border-r">Employee</th>
                {weekdays.map((day) => (
                  <th key={day} className="p-4 border-r">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planningData.map((emp, idx) => (
                <motion.tr
                  key={idx}
                  className="border-b border-gray-200 text-black hover:bg-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                >
                  <td className="p-4 flex items-center gap-3 border-r">
                    <img
                      src={emp.profilePic}
                      alt={emp.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{emp.name}</div>
                      <div className="text-sm text-gray-500">{emp.specialization}</div>
                    </div>
                  </td>

                  {weekdays.map((day) => {
                    const isHoliday = emp.days[day] === 'Holiday';
                    const time = emp.days[day];

                    return (
                      <td
                        key={day}
                        className={`p-4 border-r relative text-center ${
                          isHoliday ? 'bg-red-100' : ''
                        }`}
                      >
                        {isHoliday ? (
                          <>
                            <div className="absolute inset-0 bg-red-100 pointer-events-none" />
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,transparent_45%,#ef4444_45%,#ef4444_55%,transparent_55%)] opacity-30" />
                            <span className="relative z-10 font-semibold text-red-700">
                              Holiday
                            </span>
                          </>
                        ) : time ? (
                          <div className="bg-blue-50 text-blue-700 text-sm font-medium px-2 py-1 rounded">
                            {time}
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
