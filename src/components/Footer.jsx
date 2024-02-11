import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GithubPic from "../assets/Contact/GitHub-Mark-ea2971cee799.png";
import EmailPic from "../assets/Contact/gmail-logo-2.png";
import "./Styling/Footer.css";

export default function Foot() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleStickyFooter() {
      const footer = document.querySelector(".footer");
      const isDocumentHeightLessThanOrEqualToWindow =
        document.documentElement.scrollHeight <= window.innerHeight;
      const isScrolledToBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - footer.offsetHeight;

      setIsSticky(
        isDocumentHeightLessThanOrEqualToWindow && isScrolledToBottom
      );
    }

    handleStickyFooter();

    window.addEventListener("resize", handleStickyFooter);

    return () => {
      window.removeEventListener("resize", handleStickyFooter);
    };
  }, [location.pathname]);

  return (
    <footer className={`footer ${isSticky ? "sticky-footer" : ""}`}>
      <div className="footContainer text-center">
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/maxheath1"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <img src={GithubPic} alt="Github" className="badge" />
            </a>
          </div>
          <div className="col">
            <a
              href="mailto:maxheathbusiness@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <img src={EmailPic} alt="Email" className="badge" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}