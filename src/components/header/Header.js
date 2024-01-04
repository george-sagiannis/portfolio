import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [toggle, setToggle] = useState(false); // Define the toggle state
  const sectionRefs = useRef({}); // Ref to store section references

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setToggle(false);
    // Scroll to the selected section
    sectionRefs.current[link].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
            // Update the URL hash when scrolling to a new section
            window.history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
        sectionRefs.current[id] = section; // Store section references
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          George Sagiannis
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  activeLink === "home" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  activeLink === "about" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeLink === "skills" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("skills")}
              >
                <i className="uil uil-message nav__icon"></i> Skills
              </a>
            </li>



            <li className="nav__item">
              <a
                href="#projects"
                className={`nav__link ${
                  activeLink === "projects" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("projects")}
              >
                <i className="uil uil-message nav__icon"></i> Portfolio
              </a>
            </li>


            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  activeLink === "contact" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;