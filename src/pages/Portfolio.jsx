import React from "react";
import Project from "../components/Project";
import RPGImg from "../assets/Projects/RPG.PNG";
import techBlogImg from "../assets/Projects/TechBlog.png";
import musicImg from "../assets/Projects/GetRhythm.PNG";
import employeeTrackerImg from "../assets/Projects/EmployeeTracker.PNG";
import weatherDashboardImg from "../assets/Projects/WeatherDashboard.PNG";
import ecomImg from "../assets/Projects/e-commerce.PNG";

import "../components/Styling/PortfolioPage.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-row">
          <Project
            title="Random Password Generator"
            imageSrc={RPGImg}
            deployedLink="https://maxheath1.github.io/RandomPasswordGenerator/"
            githubLink="https://github.com/MaxHeath1/RandomPasswordGenerator"
          />
          <Project
            title="Tech Blog"
            imageSrc={techBlogImg}
            deployedLink="Placeholer"
            githubLink="https://github.com/MaxHeath1/TechBlog"
          />
        </div>
        <div className="project-row">
          <Project
            title="Get Rhythm"
            imageSrc={musicImg}
            deployedLink="https://whitbreezy.github.io/get-rhythm/"
            githubLink="https://github.com/whitbreezy/get-rhythm"
          />
          <Project
            title="Employee Tracker (SQL Application)"
            imageSrc={employeeTrackerImg}
            githubLink="https://github.com/MaxHeath1/EmployeeTracker"
          />
        </div>
        <div className="project-row">
          <Project
            title="Weather-Dashboard"
            imageSrc={weatherDashboardImg}
            deployedLink="https://maxheath1.github.io/Weather-Dashboard/"
            githubLink="https://github.com/MaxHeath1/Weather-Dashboard"
          />
          <Project
            title="E-commerce Backend (No frontend)"
            imageSrc={ecomImg}
            githubLink="https://github.com/MaxHeath1/Backend-ecommerce"
          />
        </div>

        {/* Add more Project components with different project details here when needed*/}
      </div>
    </div>
  );
}