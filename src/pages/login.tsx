import { useState} from "react";
import type { FormEvent } from "react";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Anggap akun sudah ada
    const dummyEmail = "admin@gmail.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
        alert("Login berhasil 🎉");
        setError("");
    } else {
        setError("Email atau password salah");
    }
};

return (
    <div style={containerStyle}>
        <form onSubmit={handleSubmit} style={cardStyle}>
        <h2 style={{
            textAlign:"center"
        }}>Login</h2>
        <div style={{marginTop:"12px",
            display:"flex",
            flexDirection:"column"
        }}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="****@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
            />
        </div>

        <div style={{marginTop:"12px",
            display:"flex",
            flexDirection:"column",
        }}>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                required
            />

        </div>

        {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

            <button type="submit" style={buttonStyle}>
            Login
            </button>
        </form>
        </div>
    );
};

export default Login;

const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
};

const cardStyle: React.CSSProperties = {
    width: "320px",
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
};

const inputStyle: React.CSSProperties = {
    padding: "10px",
    marginTop: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
    marginTop: "16px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
};
