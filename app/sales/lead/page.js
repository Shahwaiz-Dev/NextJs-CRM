'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import TopNav from '../../components/TopNav';
import { motion } from 'framer-motion';

const leads = [
  {
    name: 'John Carter',
    company: 'Alpha Corp',
    status: 'Interested',
    email: 'john@alpha.com',
    budget: '$12,000',
  },
  {
    name: 'Emma Stone',
    company: 'Beta Inc.',
    status: 'Contacted',
    email: 'emma@beta.com',
    budget: '$8,500',
  },
  {
    name: 'Raj Kumar',
    company: 'Gamma Ltd.',
    status: 'New',
    email: 'raj@gamma.com',
    budget: '$15,000',
  },
];

export default function LeadPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen transition-all duration-300 ${isSidebarOpen ? 'pl-[160px]' : 'pl-[60px]'}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <motion.div
        className="p-6 bg-white min-h-screen text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TopNav />

        <motion.h1
          className="text-3xl font-bold mb-6 text-blue-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          🔍 Sales Leads
        </motion.h1>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-white text-black">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Budget</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, idx) => (
                  <motion.tr
                    key={idx}
                    className="hover:bg-blue-500 transition"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <td className="py-3 px-4">{lead.name}</td>
                    <td className="py-3 px-4">{lead.company}</td>
                    <td className="py-3 px-4">{lead.email}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'Interested'
                            ? 'bg-green-600'
                            : lead.status === 'Contacted'
                            ? 'bg-yellow-500'
                            : 'bg-gray-500'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{lead.budget}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
