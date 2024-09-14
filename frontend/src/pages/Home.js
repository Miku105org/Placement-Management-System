import React from 'react';
import './Home.css';
import microsoft from '../images/microsoft.png'; // Import the Microsoft logo

function Home() {
  // Generate an array of cards, all showing the Microsoft logo
  const logos = new Array(20).fill(microsoft); // Array with 20 Microsoft logos

  // Example internship opportunities (you can adjust or remove these as needed)
  const internships = [
    { title: 'Software Engineer Intern at Microsoft', link: '#' },
    { title: 'Product Manager Intern at Google', link: '#' },
    { title: 'Data Analyst Intern at Facebook', link: '#' },
    // Add more internships here
  ];

  return (
    <div className="page-layout">
      {/* Left Side - Company Cards */}
      <div className="home-container">
        <h2>Welcome to the Placement Management Portal</h2>
        <div className="card-grid">
          {logos.map((logo, index) => (
            <div className="card" key={index}>
              <img src={logo} alt={`Microsoft Logo`} />
              <h3>Company {index + 1}</h3>
              <div className="card-buttons">
                <button className="btn">Apply</button>
                <button className="btn">About</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Internship Opportunities */}
      <div className="internship-section">
        <h3>New Internship Opportunities</h3>
        <ul className="internship-list">
          {internships.map((internship, index) => (
            <li key={index}>
              <span className="internship-title">{internship.title}</span>
              <br />
              <button className="apply-btn">Apply</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
