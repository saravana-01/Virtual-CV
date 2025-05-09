import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import picture from "../src/Saravana.jpeg";

const App = () => {
  return (
    <div className="container min-vh-100">
      <div className="row">
        <div className="col-md-3 left-side bg-secondary text-white text-center py-4 p-5">
          <img
            src={picture}
            style={{ width: "200px", height: "200px", borderRadius: "150px" }}
          />

          <h2>Saravana Pandiyan</h2>
          <p>Frontend Developer</p>

          <hr className="bg-white" />
          <h5>Contact</h5>
          <p>
            Email:{" "}
            <a
              href="saravanapandiyan0903@email.com"
              className="text-white text-decoration-underline"
            >
              saravanapandiyan0903@gmail.com
            </a>
          </p>
          <p>Whatsapp: +91 9384531400</p>
          <p>
            Portfolio:{" "}
            <a
              href="https://portfolio-git-main-saravana-01s-projects.vercel.app/"
              className="text-white text-decoration-underline"
            >
              Saravana's portfolio
            </a>
          </p>

          <hr className="bg-white" />
          <h5>Skills</h5>
          <ul className="list-unstyled">
            <li>HTML,CSS,Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React ,React Native</li>
          </ul>

          <hr className="bg-white" />
          <section className="mb-4">
            <h5>Education</h5>

            <p className="fw-bold mb-0">Bachelor of Computer Application</p>
            <p className="mb-1">NMSSVN College,Madurai</p>
            <p>Graduated: 2023</p>
          </section>
        </div>
        {/* Right Column */}
        <div className="col-md-8 bg-light p-4">
          <section className="mb-4">
            <h4 className="text-primary">Profile</h4>
            <p>
              <strong>Frontend Developer</strong> – 1 Year Experience
              Detail-oriented frontend developer with 1 year of hands-on
              experience in building responsive and dynamic web applications
              using React.js and TypeScript (TSX). Proficient in integrating
              RESTful APIs, managing state, and implementing full CRUD
              operations. Strong understanding of component-based architecture,
              modern JavaScript/ES6+, and UI/UX principles. Quick learner with a
              passion for clean, maintainable code and continuous improvement.
              --- Would you like help expanding this into a full resume or
              tailoring it for a specific job role?
            </p>
          </section>

          <section className="mb-4">
            <h4 className="text-primary">Experience</h4>
            <h5 className="mt-3">Frontend Developer</h5>
            <p className="text-muted">
              velozion technologies-Bengaluru
              <p>April 2024-January 2025</p>
            </p>
          </section>
          <section className="mb-4">
            <h4 className="text-primary">Projects</h4>
            <h5 className="mt-3">HR Portal (Leave Management System)</h5>
            <p className="text-muted">5 Team Members,3 months duration</p>
            <p className="text-muted">
              Developed a role-based employee management system using React.js
              and TypeScript, where HR can add Team Leads (TLs), TLs can add
              employees, and employees can request leaves. Leave requests are
              approved or rejected by both HR and TL. Implemented role-based
              login, dynamic UI rendering, and full CRUD operations for Admin,
              HR, and Employee modules, with data handled via RESTful APIs.
            </p>
            <h5 className="mt-3">Tours and Travels</h5>
            <p className="text-muted">5 Team Members,4Months duration</p>
            <p className="text-muted">
              Built a role-based Tour & Travel web application using React TSX
              TypeScript with three user roles: Super Admin, Admin, and
              Customer. Admins can add and manage their own tour packages, while
              Customers can view and book them. Super Admins have access to view
              all tour packages from every admin through a centralized
              dashboard. Implemented role-based login and dynamic UI rendering.
              My role focused on adding, listing, and editing tour packages as
              part of the admin functionalities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
