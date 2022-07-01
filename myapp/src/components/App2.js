/*jshint esversion: 6 */
import React, { useState } from "react";
// import Heading from "./Heading";
// import Card from "./Card";
import Axios from "axios";
// import Button from "./Button";

function App() {
  const [userName, setuserName] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [academics, setAcademics] = useState("");
  const [others, setOthers] = useState("");
  const [handle, setHandle] = useState("");
  const [offerInHand, setOfferInHand] = useState("");

  const [formFields, setFormFields] = useState([
    { work: "", profile: "", duration: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      work: "",
      profile: "",
      duration: "",
    };
    setFormFields([...formFields, object]);
  };
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
    // console.log(index);
  };

  const submitData = () => {
    Axios.post("http://localhost:5000/api/insert", {
      userName: userName,
      location: location,
      experience: experience,
      salary: salary,
      academics: academics,
      others: others,
      handle: handle,
      offerInHand: offerInHand,
      formFields: formFields,
    }).then(() => {
      alert("success!");
    });
  };

  return (
    <div>
      <h1>Candidate Case Summary</h1>
      <br />
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Location: </label>
        <input
          type="text"
          name="location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Experience (Years): </label>
        <input
          type="number"
          name="experience"
          onChange={(e) => {
            setExperience(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Salary(LPA): </label>
        <input
          type="text"
          name="salary"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
      </div>

      <div>
        <label>Academics: </label>
        <input
          type="text"
          name="academics"
          onChange={(e) => {
            setAcademics(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Technologies (, separated) : </label>
        <input
          type="text"
          name="others"
          onChange={(e) => {
            setOthers(e.target.value);
          }}
        />
      </div>
      <div>
        <label>LinkedIN handle: </label>
        <input
          type="text"
          name="handle"
          onChange={(e) => {
            setHandle(e.target.value);
          }}
        />
      </div>
      <div>
        <label>offer in hand (yes/no) :</label>
        <input
          type="text"
          name="offerInHand"
          onChange={(e) => {
            setOfferInHand(e.target.value);
          }}
        />
      </div>
      <div>
        {formFields.map((form, index) => {
          return (
            <form>
              <div key={index}>
                <label>Work Experience : (company name) </label>
                <input
                  type="text"
                  name="work"
                  onChange={(e) => handleFormChange(e, index)}
                  value={form.work}
                />
                <br />
                <label>Duration (MM/YYYY-MM/YYYY) : </label>
                <input
                  type="text"
                  name="duration"
                  onChange={(e) => handleFormChange(e, index)}
                  value={form.duration}
                />
                <br />
                <label>Profile: </label>
                <input
                  type="text"
                  name="profile"
                  onChange={(e) => handleFormChange(e, index)}
                  value={form.profile}
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
        <button onClick={submitData}>Submit</button>
      </div>
    </div>
  );
}

export default App;
