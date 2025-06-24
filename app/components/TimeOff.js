export default function TimeOff() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold mb-4 text-black">Time Off</h3>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div className="bg-[#1357c4] h-3 rounded-full w-2/3"></div>
      </div>
      <div className="flex justify-between text-sm text-black">
        <span>12 Taken</span>
        <span>3 Scheduled</span>
        <span>5 Available</span>
      </div>
    </div>
  );
}
