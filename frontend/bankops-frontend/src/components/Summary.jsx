function Summary({ summary, total }) {
  return (
    <div className="summary">
      <div className="card green">
        <h3>Total Credit</h3>
        <p>₹{summary.totalCredit.toLocaleString()}</p>
      </div>
      <div className="card red">
        <h3>Total Debit</h3>
        <p>₹{summary.totalDebit.toLocaleString()}</p>
      </div>
      <div className="card blue">
        <h3>Transactions</h3>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default Summary;