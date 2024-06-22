import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavTabs.css";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("About"); 
  const [slogan, setSlogan] = useState("Improving Lives Through Learning");

  const handleSetActiveTab = (tabName, tabSlogan) => {
    setActiveTab(tabName);
    setSlogan(tabSlogan);
  };

  return (
    <div className="NavTab">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="course_tabs">
              <nav>
                <div className="nav-item">
                  <Link
                    to="/"
                    className={`nav-item-nav-link ${activeTab === "About" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("About", "Improving Lives Through Learning")}
                  >
                    About
                  </Link>
                  <Link
                    to="/blog"
                    className={`nav-item-nav-link ${activeTab === "Blog" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("Blog", "Insights, ideas, and stories")}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/company"
                    className={`nav-item-nav-link ${activeTab === "Company" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("Company", "Expanding learning opportunities")}
                  >
                    Company
                  </Link>
                  <Link
                    to="/careers"
                    className={`nav-item-nav-link ${activeTab === "Careers" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("Careers", "We're a passionate, creative, and global company, come work with us.")}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/press"
                    className={`nav-item-nav-link ${activeTab === "Press" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("Press", "What others are saying")}
                  >
                    Press
                  </Link>
                </div>
              </nav>
            </div>
            <div className="Slogan">
              <h2>{slogan}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
