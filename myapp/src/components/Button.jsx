/*jshint esversion: 6 */
import React from "react";
import Axios from "axios";

function Button(props) {
  const submitData = () => {
    Axios.post("http://localhost:3001/api/insert", {
      field1: field1,
      field2: field2
    }).then(() => {
      alert("success!");
    });
  };

  return (
    <div>
      <button onClick={submitData}>{props.name}</button>
    </div>
  );
}

export default Button;
