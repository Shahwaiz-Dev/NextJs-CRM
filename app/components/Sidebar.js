'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Employees', path: '/employees' },
  { label: 'Time Off', path: '/timeoff' },
  { label: 'Settings', path: '/settings' },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  return (
    <motion.aside
      animate={{ width: isOpen ? 160 : 60 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full bg-[#1357c4] text-white p-4 flex flex-col justify-between z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-center mb-6">
        {isOpen ? 'HR' : 'H'}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 flex-grow">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className={`hover:bg-blue-600 p-2 rounded text-sm transition-all ${
              isOpen ? 'text-left' : 'text-center'
            }`}
            title={!isOpen ? item.label : ''}
          >
            {isOpen ? item.label : item.label.charAt(0)}
          </Link>
        ))}

{/* Sales Dropdown */}
<div className="relative">
  <button
    onClick={() => setIsSalesOpen(!isSalesOpen)}
    className={`w-full hover:bg-blue-600 p-2 rounded text-sm flex items-center justify-between transition-all ${
      isOpen ? '' : 'justify-center'
    }`}
  >
    {isOpen ? (
      <>
        <span>Sales</span>
        {isSalesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </>
    ) : (
      <span>S</span>
    )}
  </button>

  {/* Nested Sales Links */}
  {isSalesOpen && isOpen && (
    <div className="ml-4 mt-1 flex flex-col gap-1">
      <Link
        href="/sales"
        className="block px-2 py-1 text-sm rounded hover:bg-blue-500"
      >
        Dashboard
      </Link>
      <Link
        href="/sales/lead"
        className="block px-2 py-1 text-sm rounded hover:bg-blue-500"
      >
        Lead
      </Link>
      <Link
        href="/sales/inventory"
        className="block px-2 py-1 text-sm rounded hover:bg-blue-500"
      >
        Inventory
      </Link>
    </div>
  )}
</div>
        
      </nav>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white text-blue-700 border border-blue-300 rounded-full p-1 shadow"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </motion.aside>
  );
}
