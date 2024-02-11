import React from "react";
import "../components/Styling/Aboutme.css";
import profilePicture from "../assets/Profile/IMG_2674.jpg";

export default function AboutPage() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-heading">About Me</h2>
            <div className="profile-picture-container">
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <p className="text-muted">
              Hello my name is Max Heath. I'm a fullstack developer from Riverton Utah. I have been learning fullstack development for about 6 months at 
              the University of Utah EDX Bootcamp! 
            </p>
            <p className="text-muted">
              I mainly enjoy working in Javascript, Databases, and Node.js. But do not worry I can still do css, html, handlebars, vite
              mongoDB, and more! I am always striving to learn more about coding day in and day out. No matter what next language or add on comes out 
              I will be learning about it right away!
            </p>
            <p className="text-muted">
              My approach to development is building out the core structure first then adding all the fancy things after. This gives everyone 
              on the team a clear direction in my opinion. It also helps me not get lost or sidetracked too lol
            </p>
            <p className="text-muted">
            When I am not coding I am playing games, sports, or watching one of those 2!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}