import React from 'react'
import './Images.css'
import octocat from "../assets/octocat.png"
import jobLogo from "../assets/job-logo.svg"

const Images = () => {
    return (
        <div className="header-images">
           <img src={octocat} alt="octacat" />
           <img src={jobLogo} alt="Job-Logo" /> 
        </div>
    )
}

export default Images
