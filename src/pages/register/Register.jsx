import { useState } from 'react';
import axios from 'axios';
import style from './register.module.css';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [patient, setPatient] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        contactNumber: "",
        email: "",
        password: "",
        address: "",
        emergencyContact: "",
        bloodType: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(patient);
        

        try {
            const response = await axios.post("http://localhost:8080/patientsController/savePatient", patient, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("Registration Successful");
                setPatient({
                    firstName: "",
                    lastName: "",
                    dateOfBirth: "",
                    gender: "",
                    contactNumber: "",
                    email: "",
                    password: "",
                    address: "",
                    emergencyContact: "",
                    bloodType: ""
                });
            }
        } catch (error) {
            console.error("Registration Failed:", error);
            toast.error("Registration Failed! Please try again.");
        }
    };

    return (
        <div className={style.container}>
            <Toaster />
            <div className={style.doctor}>
                <img src="src/pages/image/doctor.avif" alt="Doctor" />
            </div>
            <div className={style.form}>
                <h1>Patient Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className={style.details}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder="Enter first name" name="firstName" value={patient.firstName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder="Enter last name" name="lastName" value={patient.lastName} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className={style.details}>
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="date" name="dateOfBirth" value={patient.dateOfBirth} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" value={patient.gender} onChange={handleChange} required>
                                <option value="">-- Select --</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.details}>
                        <div>
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input type="tel" placeholder="Enter contact number" name="contactNumber" value={patient.contactNumber} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter email" name="email" value={patient.email} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className={style.details}>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter password" name="password" value={patient.password} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" placeholder="Enter address" name="address" value={patient.address} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className={style.details}>
                        <div>
                            <label htmlFor="emergencyContact">Emergency Contact</label>
                            <input type="tel" placeholder="Enter emergency contact" name="emergencyContact" value={patient.emergencyContact} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="bloodType">Blood Type</label>
                            <select name="bloodType" value={patient.bloodType} onChange={handleChange} required>
                                <option value="">-- Select --</option>
                                <option value="1">A+</option>
                                <option value="2">A-</option>
                                <option value="3">B+</option>
                                <option value="4">B-</option>
                                <option value="5">AB+</option>
                                <option value="6">AB-</option>
                                <option value="7">O+</option>
                                <option value="8">O-</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.btn}>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
