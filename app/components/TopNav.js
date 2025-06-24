// components/TopNav.js
export default function TopNav() {
  return (
    <div className="flex justify-between items-center mb-8">
      <nav className="space-x-6 text-gray-600">
        <span>Dashboard</span>
        <span>Employees</span>
        <span>Time Off</span>
        <span>Recruitment</span>
      </nav>
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded border border-gray-300 text-black"
      />
    </div>
  );
}
