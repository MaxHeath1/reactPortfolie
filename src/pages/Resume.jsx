import React from "react";
import "../components/Styling/Resume.css";
import HTMLBadge from "../assets/Badges/HTML5_logo_and_wordmark.svg.png";
import cssBadge from "../assets/Badges/CSS3_logo.svg.png";
import JSBadge from "../assets/Badges/JavaScript-logo.png";
import mongoBadge from "../assets/Badges/MongoDB-Logo.png";
import mySQLBadge from "../assets/Badges/MySQL-Logo.png";
import nodeBadge from "../assets/Badges/590px-Node.js_logo.svg.png";
import reactBadge from "../assets/Badges/React-icon.svg.png";

export default function ContactPage() {
  const frontendProficiencies = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Handlebars",
    "Webpack",
  ];
  const backendProficiencies = [
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Apollo Graphql",
  ];
  const downloadResume = () => {
    const element = document.createElement("a");
    const file = new Blob([<PdfResume />], { type: "application/pdf" });
    element.href = URL.createObjectURL(file);
    element.download = "Your_Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="resume-page">
      {/* Language Badges */}
      <div className="language-badges">
        <img src={HTMLBadge} alt="HTML Badge" />
        <img src={cssBadge} alt="CSS Badge" />
        <img src={JSBadge} alt="JavaScript Badge" />
        <img src={mongoBadge} alt="MongoDB Badge" />
        <img src={mySQLBadge} alt="MySQL Badge" />
        <img src={nodeBadge} alt="Node.js Badge" />
        <img src={reactBadge} alt="React.js Badge" />
        {/* Add more image badges as needed */}
      </div>

      {/* Download Button */}
      <button onClick={downloadResume} className="download-button">
        Download Resume
      </button>

      {/* Frontend*/}
      <div className="proficiencies">
        <h2>Frontend Proficiencies</h2>
        <ul>
          {frontendProficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>

      {/* Backend*/}
      <div className="proficiencies">
        <h2>Backend Proficiencies</h2>
        <ul>
          {backendProficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}