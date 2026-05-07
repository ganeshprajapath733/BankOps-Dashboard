function TransactionTable({ transactions }) {
  const statusColor = { SUCCESS: "green", FAILED: "red", PENDING: "orange" };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Account</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.accountNumber}</td>
              <td className={t.type === "CREDIT" ? "credit" : "debit"}>{t.type}</td>
              <td>₹{t.amount.toLocaleString()}</td>
              <td>{t.description}</td>
              <td style={{ color: statusColor[t.status], fontWeight: "bold" }}>{t.status}</td>
              <td>{new Date(t.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;