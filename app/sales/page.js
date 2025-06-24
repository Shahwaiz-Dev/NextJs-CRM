'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';

const salesData = [
  { month: 'Jan', income: 17000, expenses: 17000 },
  { month: 'Feb', income: 16500, expenses: 17500 },
  { month: 'Mar', income: 16000, expenses: 16900 },
  { month: 'Apr', income: 17500, expenses: 17400 },
  { month: 'May', income: 15800, expenses: 15900 },
  { month: 'Jun', income: 16800, expenses: 19400 },
  { month: 'Jul', income: 19000, expenses: 17900 },
  { month: 'Aug', income: 16200, expenses: 16200 },
  { month: 'Sep', income: 15700, expenses: 15700 },
  { month: 'Oct', income: 15100, expenses: 18100 },
  { month: 'Nov', income: 13500, expenses: 17100 },
  { month: 'Dec', income: 16800, expenses: 19000 },
];

const pieData = [
  { name: 'Apparel', value: 800 },
  { name: 'Sports', value: 650 },
  { name: 'Others', value: 542 },
];

const barData = [
  { day: 'Mon', sales: 80 },
  { day: 'Tue', sales: 70 },
  { day: 'Wed', sales: 75 },
  { day: 'Thu', sales: 80 },
  { day: 'Fri', sales: 70 },
  { day: 'Sat', sales: 60 },
  { day: 'Sun', sales: 40 },
];

const COLORS = ['#8B5CF6', '#F59E0B', '#EC4899'];

export default function SalesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen bg-white text-black transition-all duration-300 ${isSidebarOpen ? 'pl-[160px]' : 'pl-[60px]'}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <motion.div
        className="p-6 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TopNav />

        <motion.div
          className="text-sm text-blue-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-black">Dashboard</span> / <span className="text-gray-400">Sales</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100 col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-lg font-semibold mb-2">Revenue</div>
            <div className="mb-4 text-black">Total Profit <span className="text-blue-400">$10,840</span></div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="income" stroke="#3b82f6" />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-end gap-4 mt-2 text-sm">
              <div className="text-blue-400">● Income</div>
              <div className="text-red-400">● Expenses</div>
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-lg font-semibold mb-4">Sales By Category</div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={70} dataKey="value" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-sm text-gray-400 mt-4 w-full text-center">
              {pieData.map((item, i) => (
                <div key={i}>{item.name}: {item.value}</div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bar Chart */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-lg font-semibold mb-2">Daily Sales Overview</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Sections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Recent Products */}
          <div className="bg-white p-6 rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100">
            <div className="text-lg font-semibold mb-4">Recent Products</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between"><span>Running Shoes</span><span>$89</span></li>
              <li className="flex justify-between"><span>Yoga Mat</span><span>$39</span></li>
              <li className="flex justify-between"><span>Smartwatch</span><span>$199</span></li>
            </ul>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100">
            <div className="text-lg font-semibold mb-4">Recent Orders</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between"><span>Order #1001</span><span>$129</span></li>
              <li className="flex justify-between"><span>Order #1002</span><span>$89</span></li>
              <li className="flex justify-between"><span>Order #1003</span><span>$149</span></li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
