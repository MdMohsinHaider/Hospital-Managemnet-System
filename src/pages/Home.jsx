// src/pages/Home/Home.jsx
import React from "react";
import styles from "./home.module.css"; // Importing CSS module
import { useNavigate } from "react-router-dom";


const doctors = [
  {
    title: "General Checkup",
    description: "Routine health checkups by expert doctors.",
    image: "/doc1.jpg", // Ensure the image exists in the public folder
  },
  {
    title: "Specialist Consultation",
    description: "Consult with expert specialists for various health concerns.",
    image: "/doc2.jpg",
  },
  {
    title: "Emergency Care",
    description: "Immediate medical attention for emergencies.",
    image: "/doc3.jpg",
  },
];

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Our Hospital</h1>
        <p>Your health is our priority. Book an appointment with our expert doctors.</p>
        <button className={styles.ctaButton} onClick={() => navigate("/register")}>Book Appointment</button>
      </section>

      <div className={styles.doctorsContainer}>
      <h2 className={styles.title}>Our Doctor Services</h2>
      <div className={styles.doctorsGrid}>
        {doctors.map((doctor, index) => (
          <div key={index} className={styles.doctorsCard}>
            <img src={doctor.image} alt={doctor.title} className={styles.image} />
            <h3 className={styles.doctorsTitle}>{doctor.title}</h3>
            <p className={styles.description}>{doctor.description}</p>
          </div>
        ))}
      </div>
    </div>
      {/* Services Section */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <img src="/blog1.jpg" alt="Doctor Consultation" />
            <h3>Doctor Consultation</h3>
            <p>Get expert advice from our specialized doctors.</p>
          </div>
          <div className={styles.serviceCard}>
            <img src="/blog2.jpg" alt="Lab Tests" />
            <h3>Lab Tests</h3>
            <p>We provide accurate and quick diagnostic services.</p>
          </div>
          <div className={styles.serviceCard}>
            <img src="/blog3.jpg" alt="Surgeries" />
            <h3>Surgeries</h3>
            <p>Advanced and safe surgical procedures.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Need Assistance?</h2>
        <p>Call us at <strong>+91 6201592239</strong> or email <strong>support@hospital.com</strong></p>
        <button className={styles.contactButton}>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
