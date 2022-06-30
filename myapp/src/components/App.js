/*jshint esversion: 6 */
import React, {useState} from "react";
import Heading from "./Heading";
// import Card from "./Card";
import Axios from "axios";
// import Button from "./Button";

function App() {
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [work, setWork] = useState("");
  const [academics, setAcademics] = useState("");
  const [others, setOthers] = useState("");

  const submitData = () => {
    Axios.post("http://localhost:3001/api/insert", {
      experience: experience,
      salary: salary,
      work: work,
      academics: academics,
      others: others
    }).then(() => {
      alert("success!");
    });
  };

  return (
    <div>
      <Heading text="Candidate Case Summary" />
      <div>
        <label>Experience (Years): </label>
        <input
          type="number"
          name="experience"
          onChange={e => {
            setExperience(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Salary(LPA): </label>
        <input
          type="text"
          name="salary"
          onChange={e => {
            setSalary(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Work Experience: </label>
        <input
          type="text"
          name="work"
          onChange={e => {
            setWork(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Academics: </label>
        <input
          type="text"
          name="academics"
          onChange={e => {
            setAcademics(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Other Information: </label>
        <input
          type="text"
          name="others"
          onChange={e => {
            setOthers(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={submitData}>Submit</button>
      </div>
    </div>
  );
}

export default App;
