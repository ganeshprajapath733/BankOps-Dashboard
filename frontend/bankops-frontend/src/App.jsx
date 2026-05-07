import { useState, useEffect } from "react";
import axios from "axios";
import Summary from "./components/Summary";
import TransactionTable from "./components/TransactionTable";
import Chart from "./components/Chart";
import "./App.css";

const API = "/api/transactions";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ totalCredit: 0, totalDebit: 0 });
  const [filter, setFilter] = useState({ account: "", status: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
    fetchSummary();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    const res = await axios.get(API);
    setTransactions(res.data);
    setLoading(false);
  };

  const fetchSummary = async () => {
    const res = await axios.get(`${API}/summary`);
    setSummary(res.data);
  };

  const handleFilter = async () => {
    setLoading(true);
    let res;
    if (filter.account) {
      res = await axios.get(`${API}/account/${filter.account}`);
    } else if (filter.status) {
      res = await axios.get(`${API}/status/${filter.status}`);
    } else {
      res = await axios.get(API);
    }
    setTransactions(res.data);
    setLoading(false);
  };

  const handleReset = () => {
    setFilter({ account: "", status: "" });
    fetchAll();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🏦 BankOps Dashboard</h1>
        <p>Transaction Monitoring System</p>
      </header>

      <Summary summary={summary} total={transactions.length} />
      <Chart transactions={transactions} />

      <div className="filters">
        <input
          placeholder="Filter by account (e.g. ACC001)"
          value={filter.account}
          onChange={(e) => setFilter({ account: e.target.value, status: "" })}
        />
        <select
          value={filter.status}
          onChange={(e) => setFilter({ account: "", status: e.target.value })}
        >
          <option value="">All Statuses</option>
          <option value="SUCCESS">SUCCESS</option>
          <option value="FAILED">FAILED</option>
          <option value="PENDING">PENDING</option>
        </select>
        <button onClick={handleFilter}>Apply</button>
        <button onClick={handleReset} className="reset">Reset</button>
      </div>

      {loading ? <p className="loading">Loading...</p> : <TransactionTable transactions={transactions} />}
    </div>
  );
}

export default App;