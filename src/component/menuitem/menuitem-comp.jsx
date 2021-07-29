import React from "react";
import "./menuitem-comp.css";

export const MenuItem = ({ title, img, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="BackgroundImage"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);
