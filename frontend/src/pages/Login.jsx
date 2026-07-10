import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-canvas)",
      }}
    >
      <div style={{ width: 380 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div className="mono" style={{ fontSize: 15, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.04em" }}>
            ITBIS
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
            Insider Threat Behavioral Intelligence
          </div>
        </div>

        <div className="scan-line" style={{ marginBottom: 24 }} />

        <div className="card">
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label className="field-label">Username</label>
              <input
                className="field-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label className="field-label">Password</label>
              <input
                className="field-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="mono" style={{ color: "var(--risk-critical)", fontSize: 13, marginBottom: 16 }}>
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}