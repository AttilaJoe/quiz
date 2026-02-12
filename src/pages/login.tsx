import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const success = login(email, password);

        if (success) {
            navigate("/quiz");
        } else {
            alert("Login gagal");
        }
    };

    return (
        <div>
        <h1>Login</h1>

        <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
