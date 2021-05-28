import React from "react";
import './Form.css';


const Form = ({onSubmit, setLocation, setDescription}) => {
  return (
    <div >
      <form action="" onSubmit={onSubmit}>
        <h1 className="heading">GITHUB JOB FINDER</h1>
        <input type="text" onChange={(e) =>  setDescription(e.target.value)} placeholder="Enter Description" />
        <input type="text" onChange={(e) =>  setLocation(e.target.value)}  placeholder="Enter Location"/>
        <button type="submit">Search</button> 
      </form>
    </div>
  );
};

export default Form;
