import React from "react";
import "./homepage-style.css";

export const HomePage = () => (
  <div className="home-page">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Dental Units</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Autoclaves</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Pleaching Machine</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Dental X-Rays</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
