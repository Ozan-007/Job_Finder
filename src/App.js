import "./App.css";
import Form from "./components/Form";
import Images from "./components/Images";
import axios from "axios";
import JobsCard from "./components/JobsCard";
import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  
  const getJobs = async () => {
    const response = await axios.get(
      `/positions.json?description=${description}&location=${location}`
    );
    setJobs(response.data);
    console.log(response.data)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getJobs();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Images />
      </header>
      <Form onSubmit={onSubmit} setDescription={setDescription} setLocation={setLocation}/>
      <div className="job-section">
        {jobs.map((job) => (
          <div key={job.id} className="container">
            <JobsCard url={job.company_url} type={job.type} title={job.title} location={job.location} logo={job.company_logo}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
