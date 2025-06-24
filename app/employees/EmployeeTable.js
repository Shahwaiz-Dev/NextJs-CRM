export default function EmployeeTable({ employees }) {
  return (
    <div className="bg-white shadow rounded overflow-x-auto">
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-4">Profile</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <img
                  src={emp.profilePic}
                  alt={emp.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="p-4 text-black">{emp.name}</td>
              <td className="p-4 text-black">{emp.email}</td>
              <td className="p-4 text-black">{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
