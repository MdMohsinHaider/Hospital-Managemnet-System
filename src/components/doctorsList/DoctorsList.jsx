import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./DoctorsList.module.css";

const API_BASE_URL = "http://localhost:8090/api/doctor";

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch all doctors from API
    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}`);
            setDoctors(response.data);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch doctors.");
            setLoading(false);
            console.log(error);
            
        }
    };

    // Delete doctor by ID
    const deleteDoctor = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/deleteDoctorById/${id}`);
            toast.success("Doctor deleted successfully");
            setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.doctorId !== id)); // Remove from UI
        } catch (error) {
            toast.error("Failed to delete doctor: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className={style.doctorsListContainer}>
            <h2>Doctors List</h2>
            {loading && <p>Loading doctors...</p>}
            {error && <p className={style.error}>{error}</p>}

            <div className={style.cardsContainer}>
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <div key={doctor.doctorId} className={style.card}>
                            <h3>Dr. {doctor.name}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Experience:</strong> {doctor.experienceYears} years</p>
                            <p><strong>Clinic Address:</strong> {doctor.clinicAddress}</p>
                            <p><strong>Available Days:</strong> {doctor.availableDays}</p>
                            <p><strong>Contact:</strong> {doctor.contactNumber}</p>
                            <p><strong>Email:</strong> {doctor.email}</p>
                            <p><strong>Consultation Fee:</strong> ₹{doctor.consultationFee}</p>
                            <button className={style.deleteButton} onClick={() => deleteDoctor(doctor.doctorId)}>
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No doctors available.</p>
                )}
            </div>
        </div>
    );
};

export default DoctorsList;
