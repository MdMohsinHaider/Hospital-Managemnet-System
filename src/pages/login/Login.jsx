import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    const [activeUser, setActiveUser] = useState("patient");

    // email and password spelling must be  same as backend api entity
    const [formData, setFormData] = useState({ email: "", password: "" }); 
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        let apiEndpoint = "";
        if (activeUser === "Doctor") {
            apiEndpoint = "http://localhost:8080/api/doctor/login"; // replace kar lena doctor wale login api sai
        } 
        else if (activeUser === "patient") {
            apiEndpoint = "http://localhost:8080/api/patient/login"; // replace from patient login api
        } 
        else {
            apiEndpoint = "http://localhost:8080/api/user/login"; // replace from user login api 
        }

        try {
            const response = await axios.post(apiEndpoint, formData);
            if (response.data === true) {
                navigate(`/${activeUser.toLowerCase()}`);
            } 
            else {
                setError("Invalid credentials. Please try again.");
            }
        } 
        catch (error) {
            setError("Something went wrong. Please try again later.");
            console.error("Login error:", error);
        }
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.toggleContainer}>
                    <button
                        className={`${styles.toggleButton} ${activeUser === "Doctor" ? styles.active : ""}`}
                        onClick={() => setActiveUser("Doctor")}
                    >
                        Doctor
                    </button>
                    <button
                        className={`${styles.toggleButton} ${activeUser === "patient" ? styles.active : ""}`}
                        onClick={() => setActiveUser("patient")}
                    >
                        Patient
                    </button>
                    <button
                        className={`${styles.toggleButton} ${activeUser === "user" ? styles.active : ""}`}
                        onClick={() => setActiveUser("user")}
                    >
                        User
                    </button>
                </div>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <label>Email / Mobile Number</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email or mobile"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={styles.input}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Link to="/" className={styles.forgotPassword}>Forgot Password?</Link>
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
