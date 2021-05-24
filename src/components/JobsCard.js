import React from "react";
import "./JobsCard.css";
import octocat from "../assets/octocat.png"
const JobsCard = ({ type, logo, title, location, url }) => {
  return (
    <div className="Card">
      <div className="logo">
        <img className="img-logo" src={logo ?? octocat} alt="Logo" />
      </div>
    <div className="green-border">
      <div className="title">
        <h2 style={{ color: "red" }}>{title}</h2>
      </div>
      <div className="job-info">
        <h3>{location}</h3>
        <p>{type}</p>
      </div>
      <div className="apply">
      <button className="apply-btn">
        <a href={url}>Apply</a>
      </button>
      </div>
    </div> 
    
    </div>
  );
};

export default JobsCard;
