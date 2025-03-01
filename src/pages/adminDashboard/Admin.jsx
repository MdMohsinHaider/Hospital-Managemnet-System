import styles from "./Admin.module.css";
import DoctorReg from "../../components/doctorReg/DoctorReg";
import DoctorsList from "../../components/doctorsList/DoctorsList"

function Admin() {
    return (
        <div>
            <center><h2>Admin Dashboard</h2></center>
            <div className={styles.adminContainer}>
                <div className={styles.section}>
                    <DoctorReg />
                </div>
                <div className={styles.section}>
                    <DoctorsList />
                </div>
            </div>
        </div>
    );
}

export default Admin;
