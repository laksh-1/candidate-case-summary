/*jshint esversion: 6 */
import React, { useState } from "react";
import Heading from "./Heading";
// import Card from "./Card";
import Axios from "axios";
// import Button from "./Button";

function App() {
  // const [experience, setExperience] = useState("");
  // const [salary, setSalary] = useState("");
  // const [work, setWork] = useState("");
  // const [academics, setAcademics] = useState("");
  // const [others, setOthers] = useState("");

  const [formFields, setFormFields] = useState([
    { experience: "", salary: "", work: "", academics: "", others: "" }
  ]);

  // const submitData = () => {
  //   Axios.post("http://localhost:3001/api/insert", {
  //     experience: experience,
  //     salary: salary,
  //     work: work,
  //     academics: academics,
  //     others: others
  //   }).then(() => {
  //     alert("success!");
  //   });
  // };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = e => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/insert", {
      experience: formFields[0].experience,
      salary: formFields[0].salary,
      work: formFields[0].work,
      academics: formFields[0].academics,
      others: formFields[0].others
    }).then(() => {
      alert("success!");
    });
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      experience: "",
      salary: "",
      work: "",
      academics: "",
      others: ""
    };
    setFormFields([...formFields, object]);
  };

  const removeFields = index => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
    // console.log(index);
  };

  return (
    <div>
      {formFields.map((form, index) => {
        return (
          <form>
            <div key={index}>
              <label>Experience (Years): </label>
              <input
                type="number"
                name="experience"
                onChange={e => handleFormChange(e, index)}
                value={form.experience}
              />
              <br />
              <label>Salary(LPA): </label>
              <input
                type="text"
                name="salary"
                onChange={e => handleFormChange(e, index)}
                value={form.salary}
              />
              <br />
              <label>Work Experience: </label>
              <input
                type="text"
                name="work"
                onChange={e => handleFormChange(e, index)}
                value={form.work}
              />
              <br />
              <label>Academics: </label>
              <input
                type="text"
                name="academics"
                onChange={e => handleFormChange(e, index)}
                value={form.academics}
              />
              <br />
              <label>Other Information: </label>
              <input
                type="text"
                name="others"
                onChange={e => handleFormChange(e, index)}
                value={form.others}
              />
              <br />
              <button type="button" onClick={() => removeFields(index)}>
                Remove
              </button>
              <br />
              <br />
            </div>
          </form>
        );
      })}
      <button onClick={addFields}>Add</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
