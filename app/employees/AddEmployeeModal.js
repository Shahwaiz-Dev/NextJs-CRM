'use client';
import { useState } from 'react';

export default function AddEmployeeModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">Add Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border p-2 rounded text-black"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="position"
            placeholder="Position"
            className="w-full border p-2 rounded text-black"
            value={form.position}
            onChange={handleChange}
            required
          />
          <input
            name="department"
            placeholder="Department"
            className="w-full border p-2 rounded text-black"
            value={form.department}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full border p-2 rounded text-black"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="image"
            placeholder="Profile Picture URL (optional)"
            className="w-full border p-2 rounded text-black"
            value={form.image}
            onChange={handleChange}
          />

          {form.image && (
            <div className="flex justify-center mt-2">
              <img
                src={form.image}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border"
              />
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
