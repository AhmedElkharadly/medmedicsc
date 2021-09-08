import React from "react";
import "./homepage-style.css";
import { Directory } from "../component/directory/directory.jsx";

const HomePage = () => (
  <div className="home-page">
    <h1 className='hh'>Find Your Next Dental Clinic With Us.</h1>
    <Directory />
  </div>
);

export default HomePage;
