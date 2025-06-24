// components/Documents.js
export default function Documents() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold mb-4 text-black">DOCUMENTS</h3>
      <ul className="space-y-2">
        <li className="flex justify-between text-black">
          <span>📄 Resume.pdf</span>
          <button className="text-blue-600 text-2xl">⬇</button>
        </li>
        <li className="flex justify-between text-black">
          <span>📄 Contract.pdf</span>
          <button className="text-blue-600 text-2xl">⬇</button>
        </li>
      </ul>
    </div>
  );
}
