import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./DoctorReg.module.css";

const DoctorReg = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        specialization: "",
        contactNumber: "",
        email: "",
        password: "",
        department_id: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { firstName, lastName, specialization, contactNumber, email, password } = formData;
        if (!firstName || !lastName || !specialization || !contactNumber || !email || !password) {
            return "All fields are required.";
        }
        if (!/^\d{10}$/.test(contactNumber)) {
            return "Contact number must be 10 digits.";
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return "Invalid email format.";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters.";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        setError("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/doctorController/saveDoctor", formData);
            if (response.status === 200 || response.status === 201) {
                toast.success("Doctor registered successfully");
                setFormData({
                    firstName: "",
                    lastName: "",
                    specialization: "",
                    contactNumber: "",
                    email: "",
                    password: "",
                    department_id: ""
                });
            }
        } catch (error) {
            setError(error.response?.data?.message || "Failed to register doctor.");
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={style.doctorRegContainer}>
            <h2>Doctor Registration</h2>
            <form onSubmit={handleSubmit} className={style.doctorForm}>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label>Specialization</label>
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />

                <label>Contact Number</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Department ID (Optional)</label>
                <input type="number" name="department_id" value={formData.department_id} onChange={handleChange} />

                {error && <p className={style.error}>{error}</p>}
                <button type="submit" className={style.submitButton} disabled={loading}>
                    {loading ? "Registering..." : "Register Doctor"}
                </button>
            </form>
        </div>
    );
};

export default DoctorReg;
