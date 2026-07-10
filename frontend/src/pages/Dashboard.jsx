import { useAuth } from "../context/AuthContext";
import Layout from "../components/Layout";

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Session role", value: user?.role.replace("_", " ") || "—" },
    { label: "Account status", value: user?.is_active ? "Active" : "Inactive" },
    { label: "Access level", value: "Standard" },
  ];

  return (
    <Layout>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
          Welcome back, {user?.username || "..."}
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6 }}>
          Signed in as {user?.email}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className="field-label" style={{ marginBottom: 8 }}>{stat.label}</div>
            <div className="mono" style={{ fontSize: 18, fontWeight: 500 }}>{stat.value}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}