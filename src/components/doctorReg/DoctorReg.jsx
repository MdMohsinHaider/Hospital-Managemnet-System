import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./DoctorReg.module.css";

const specializations = [
    "Allergy and immunology", "Anesthesiology", "Dermatology", "Diagnostic radiology", "Emergency medicine",
    "Cardiologist", "Family medicine", "Internal medicine", "Medical genetics", "Neurology", "Nuclear medicine",
    "Obstetrics and gynecology", "Ophthalmology", "Pathology", "Pediatrics", "Physical medicine and rehabilitation",
    "Preventive medicine", "Psychiatry", "Radiation oncology", "Surgery", "Urology"
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const DoctorReg = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        specialization: "",
        experienceYears: "",
        clinicAddress: "",
        availableDays: [],
        consultationFee: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDaysChange = (e) => {
        const value = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            availableDays: prevState.availableDays.includes(value)
                ? prevState.availableDays.filter((day) => day !== value)
                : [...prevState.availableDays, value]
        }));
    };

    const validateForm = () => {
        const { name, email, contactNumber, specialization, experienceYears, clinicAddress, availableDays, consultationFee } = formData;
        if (!name || !email || !contactNumber || !specialization || !experienceYears || !clinicAddress || availableDays.length === 0 || !consultationFee) {
            return "All fields are required.";
        }
        if (!/^\d{10}$/.test(contactNumber)) {
            return "Contact number must be 10 digits.";
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return "Invalid email format.";
        }
        if (isNaN(experienceYears) || experienceYears < 0) {
            return "Experience years must be a positive number.";
        }
        if (isNaN(consultationFee) || consultationFee < 0) {
            return "Consultation fee must be a positive number.";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8090/api/doctor", { ...formData, availableDays: formData.availableDays.join(", ") });
            if (response.status === 200 || response.status === 201) {
                toast.success("Doctor registered successfully");
                setFormData({
                    name: "",
                    email: "",
                    contactNumber: "",
                    specialization: "",
                    experienceYears: "",
                    clinicAddress: "",
                    availableDays: [],
                    consultationFee: ""
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
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Contact Number</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                <label>Specialization</label>
                <select name="specialization" value={formData.specialization} onChange={handleChange} required>
                    <option value="">Select Specialization</option>
                    {specializations.map((spec, index) => (
                        <option key={index} value={spec}>{spec}</option>
                    ))}
                </select>

                <label>Experience Years</label>
                <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} required />

                <label>Clinic Address</label>
                <input type="text" name="clinicAddress" value={formData.clinicAddress} onChange={handleChange} required />

                <label>Available Days</label>
                <select multiple name="availableDays" value={formData.availableDays} onChange={handleDaysChange} required>
                    {daysOfWeek.map((day, index) => (
                        <option key={index} value={day}>{day}</option>
                    ))}
                </select>

                <label>Consultation Fee</label>
                <input type="number" name="consultationFee" value={formData.consultationFee} onChange={handleChange} required />

                {error && <p className={style.error}>{error}</p>}
                <button type="submit" className={style.submitButton} disabled={loading}>
                    {loading ? "Registering..." : "Register Doctor"}
                </button>
            </form>
        </div>
    );
};

export default DoctorReg;
