// components/Payroll.js
export default function Payroll() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold mb-4 text-black">PAYROLL</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-black">
            <th>Period</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr>
            <td>April 2024</td>
            <td>Apr 30</td>
            <td>$6,500</td>
          </tr>
          <tr>
            <td>March 2024</td>
            <td>Mar 31</td>
            <td>$6,500</td>
          </tr>
          <tr>
            <td>Feb 2024</td>
            <td>Feb 29</td>
            <td>$6,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
