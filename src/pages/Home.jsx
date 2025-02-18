// src/pages/Home/Home.jsx
import React from "react";
import styles from "./home.module.css"; // Importing CSS module

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Our Hospital</h1>
        <p>Your health is our priority. Book an appointment with our expert doctors.</p>
        <button className={styles.ctaButton}>Book Appointment</button>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <img src="/assets/doctor.svg" alt="Doctor Consultation" />
            <h3>Doctor Consultation</h3>
            <p>Get expert advice from our specialized doctors.</p>
          </div>
          <div className={styles.serviceCard}>
            <img src="/assets/lab.svg" alt="Lab Tests" />
            <h3>Lab Tests</h3>
            <p>We provide accurate and quick diagnostic services.</p>
          </div>
          <div className={styles.serviceCard}>
            <img src="/assets/surgery.svg" alt="Surgeries" />
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
