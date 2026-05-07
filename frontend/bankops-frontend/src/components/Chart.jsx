import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Chart({ transactions }) {
  const data = ["ACC001", "ACC002", "ACC003"].map((acc) => {
    const accTx = transactions.filter((t) => t.accountNumber === acc);
    const credit = accTx.filter((t) => t.type === "CREDIT").reduce((s, t) => s + t.amount, 0);
    const debit = accTx.filter((t) => t.type === "DEBIT").reduce((s, t) => s + t.amount, 0);
    return { account: acc, Credit: credit, Debit: debit };
  });

  return (
    <div className="chart">
      <h2>Credit vs Debit by Account</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="account" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Credit" fill="#22c55e" />
          <Bar dataKey="Debit" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;