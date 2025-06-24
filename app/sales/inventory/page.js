'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import TopNav from '../../components/TopNav';
import { motion } from 'framer-motion';
import Image from 'next/image';

const inventoryData = [
  {
    id: 'INV-001',
    name: 'Running Shoes',
    category: 'Footwear',
    stock: 24,
    price: 89,
    image: '/images/running-shoes.jpg',
  },
  {
    id: 'INV-002',
    name: 'Yoga Mat',
    category: 'Fitness',
    stock: 58,
    price: 39,
    image: '/images/yoga-mat.jpg',
  },
  {
    id: 'INV-003',
    name: 'Smartwatch',
    category: 'Gadgets',
    stock: 12,
    price: 199,
    image: '/images/smartwatch.jpg',
  },
  {
    id: 'INV-004',
    name: 'Water Bottle',
    category: 'Accessories',
    stock: 86,
    price: 15,
    image: '/images/water-bottle.jpg',
  },
  {
    id: 'INV-005',
    name: 'Dumbbell Set',
    category: 'Fitness',
    stock: 17,
    price: 120,
    image: '/images/dumbbells.jpg',
  },
];

export default function InventoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen bg-white text-black transition-all duration-300 ${isSidebarOpen ? 'pl-[160px]' : 'pl-[60px]'}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <motion.div
        className="p-6 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TopNav />

        <motion.div
          className="text-sm text-blue-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-black">Dashboard</span> / <span className="text-gray-400">Inventory</span>
        </motion.div>

        {/* Inventory Header */}
        <motion.div
          className="flex items-center justify-between bg-white p-4 rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-xl font-semibold">Inventory Overview</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-all duration-200">
            + Add New Item
          </button>
        </motion.div>

        {/* Inventory Table */}
        <motion.div
          className="overflow-x-auto bg-white rounded-xl shadow-2xl shadow-blue-100/50 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <table className="min-w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3">Item ID</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Price ($)</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <motion.tr
                  key={item.id}
                  className="border-b hover:bg-blue-50 transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={36}
                      height={36}
                      className="rounded-md object-cover"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4">${item.price}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
}
