import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./DoctorsList.module.css";

const API_BASE_URL = "http://localhost:8080/doctorController";

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
            const response = await axios.get(`${API_BASE_URL}/getAllDoctors`);
            // setDoctors(response.data);
            setDoctors(response.data);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch doctors.", error);
            setLoading(false);
        }
    };

    // Delete doctor by ID
    const deleteDoctor = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/deleteDoctorById/${id}`);
            toast.success("Doctor deleted successfully");
            setDoctors(doctors.filter((doctor) => doctor.doctorId !== id)); // Remove from UI
        } catch (error) {
            toast.error("Failed to delete doctor.", error);
        }
    };

    return (
        <div className={style.doctorsListContainer}>
            <h2>Doctors List</h2>
            {loading ? <p>Loading doctors...</p> : null}
            {error ? <p className={style.error}>{error}</p> : null}

            <div className={style.cardsContainer}>
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <div key={doctor.doctorId} className={style.card}>
                            <h3>{doctor.firstName} {doctor.lastName}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Contact:</strong> {doctor.contactNumber}</p>
                            <p><strong>Email:</strong> {doctor.email}</p>
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
