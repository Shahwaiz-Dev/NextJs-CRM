'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import EmployeeTable from './EmployeeTable';
import AddEmployeeModal from './AddEmployeeModal';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Load saved or default employees
  useEffect(() => {
    const stored = localStorage.getItem('employees');

    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      const defaultEmployees = [
        {
          id: 1,
          name: 'Ava Johnson',
          email: 'ava.johnson@example.com',
          role: 'Software Engineer',
          profilePic: '/profilepic.jpg',
        },
        {
          id: 2,
          name: 'Liam Smith',
          email: 'liam.smith@example.com',
          role: 'HR Manager',
          profilePic: '/profilepic.jpg',
        },
        {
          id: 3,
          name: 'ChatGPT Assistant',
          email: 'gpt@openai.com',
          role: 'AI Engineer',
          profilePic: '/profilepic.jpg',
        },
      ];

      setEmployees(defaultEmployees);
      localStorage.setItem('employees', JSON.stringify(defaultEmployees));
    }
  }, []);

  // Save to localStorage when employees change
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content (with responsive left padding) */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'pl-50' : 'pl-[60px]'
        } p-6`}
      >
        <div className="sticky top-0 bg-gray-50 z-10 pb-4">
          <TopNav />
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Employees</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Employee
          </button>
        </div>

        <EmployeeTable employees={employees} />

        {showModal && (
          <AddEmployeeModal
            onClose={() => setShowModal(false)}
            onAdd={addEmployee}
          />
        )}
      </div>
    </div>
  );
}
