export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center justify-between flex-wrap gap-y-4">
      {/* Profile Image & Info */}
      <div className="flex items-center gap-6">
        <img
          src="/profilepic.jpg"
          className="w-20 h-20 rounded-full object-cover"
          alt="Profile"
        />
        <div>
          <h2 className="text-xl font-bold text-black">Eleanor Pena</h2>
          <p className="text-black">Marketing Manager</p>
        </div>
      </div>

      {/* Expanded Info Grid */}
      <div className="flex gap-12 min-w-[420px] text-sm">
        <div>
          <p className="text-gray-500">Department</p>
          <p className="text-black font-medium">Marketing</p>
        </div>
        <div>
          <p className="text-gray-500">Employment</p>
          <p className="text-black font-medium">Full-time</p>
        </div>
        <div>
          <p className="text-gray-500">Start Date</p>
          <p className="text-black font-medium">Sep. 10, 2020</p>
        </div>
      </div>
    </div>
  );
}
