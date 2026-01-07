export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // Dummy data (safe for submission)
  const stats = [
    { label: "Total Products", value: 12 },
    { label: "Total Orders", value: 5 },
    { label: "Total Users", value: 3 },
  ];

  const products = [
    { name: "iPhone 15", price: "₹80,000", stock: 12 },
    { name: "AirPods Pro", price: "₹18,000", stock: 30 },
    { name: "MacBook Air", price: "₹1,15,000", stock: 6 },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", background: "#f5f6fa" }}>
      <h1 style={{ marginBottom: "20px" }}>🛒 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ margin: 0 }}>{item.label}</h3>
            <p style={{ fontSize: "24px", margin: "10px 0 0", fontWeight: "bold" }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Products Table */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>📦 Products</h2>

        <table width="100%" cellPadding={10} style={{ borderCollapse: "collapse" }}>
          <thead style={{ background: "#f0f0f0" }}>
            <tr>
              <th align="left">Name</th>
              <th align="left">Price</th>
              <th align="left">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name} style={{ borderBottom: "1px solid #ddd" }}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "20px", color: "green" }}>
        ✅ Dashboard loaded successfully.
      </p>
    </div>
  );
}




