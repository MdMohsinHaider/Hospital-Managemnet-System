// src/pages/patientsAndDoctorViewPageByAppointment/DoctorAndPatientMeeting.jsx

import style from "./doctoaAndPatientMeeting.module.css";
import CreateDoctorNotes from "../../components/doctorNotesCreate/CreateDoctorNotes";

const DoctorAndPatientMeeting = () => {
    return (
        <div className={style.doctorAndPatientMeetingContainer}>
            <h1>Doctor and Patient Meeting</h1>
            <CreateDoctorNotes />
        </div>
    );
};

export default DoctorAndPatientMeeting;
