"use client";

export default function Dashboard() {
  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Admin Panel</h2>
        <ul style={styles.menu}>
          <li style={styles.menuItemActive}>Dashboard</li>
          <li style={styles.menuItem}>Products</li>
          <li style={styles.menuItem}>Orders</li>
          <li style={styles.menuItem}>Users</li>
          <li style={styles.menuItem}>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.heading}>Dashboard Overview</h1>

        {/* Stats */}
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Total Products</h3>
            <p style={styles.cardValue}>128</p>
          </div>
          <div style={styles.card}>
            <h3>Total Orders</h3>
            <p style={styles.cardValue}>56</p>
          </div>
          <div style={styles.card}>
            <h3>Total Users</h3>
            <p style={styles.cardValue}>23</p>
          </div>
          <div style={styles.card}>
            <h3>Revenue</h3>
            <p style={styles.cardValue}>₹1,24,000</p>
          </div>
        </div>

        {/* Table */}
        <h2 style={{ marginTop: 40 }}>Recent Orders</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>#1023</td>
              <td style={styles.td}>Rahul Sharma</td>
              <td style={styles.td}>₹3,200</td>
              <td style={{ ...styles.td, color: "green" }}>Completed</td>
            </tr>
            <tr>
              <td style={styles.td}>#1024</td>
              <td style={styles.td}>Aman Verma</td>
              <td style={styles.td}>₹1,800</td>
              <td style={{ ...styles.td, color: "orange" }}>Pending</td>
            </tr>
            <tr>
              <td style={styles.td}>#1025</td>
              <td style={styles.td}>Sneha Gupta</td>
              <td style={styles.td}>₹5,400</td>
              <td style={{ ...styles.td, color: "red" }}>Cancelled</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f8",
  },
  sidebar: {
    width: 240,
    background: "#111827",
    color: "#fff",
    padding: 20,
  },
  logo: {
    fontSize: 22,
    marginBottom: 30,
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    padding: "12px 10px",
    cursor: "pointer",
    borderRadius: 6,
    marginBottom: 8,
    color: "#cbd5e1",
  },
  menuItemActive: {
    padding: "12px 10px",
    background: "#2563eb",
    borderRadius: 6,
    marginBottom: 8,
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: 30,
  },
  heading: {
    fontSize: 28,
    marginBottom: 30,
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  cardValue: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  table: {
    width: "100%",
    background: "#fff",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
    borderCollapse: "collapse",
  },
  th: {
    padding: 14,
    background: "#e5e7eb",
    textAlign: "left",
  },
  td: {
    padding: 14,
    borderBottom: "1px solid #e5e7eb",
  },
};




