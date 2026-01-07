export default function Dashboard() {
  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial",
      background: "#f5f6fa",
      minHeight: "100vh"
    }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <Card title="Total Products" value="12" />
        <Card title="Total Orders" value="5" />
        <Card title="Total Users" value="3" />
      </div>

      {/* Products table */}
      <h2>Latest Products</h2>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff"
      }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th style={th}>Name</th>
            <th style={th}>Price</th>
            <th style={th}>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>iPhone 15</td>
            <td style={td}>₹80,000</td>
            <td style={td}>12</td>
          </tr>
          <tr>
            <td style={td}>AirPods</td>
            <td style={td}>₹18,000</td>
            <td style={td}>30</td>
          </tr>
          <tr>
            <td style={td}>MacBook</td>
            <td style={td}>₹1,40,000</td>
            <td style={td}>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

const th = {
  padding: "12px",
  borderBottom: "1px solid #ccc",
  textAlign: "left"
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee"
};



