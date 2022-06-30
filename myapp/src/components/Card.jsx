/*jshint esversion: 6 */
import React, {useState} from "react";
import Axios from "axios";

function Card(props) {
  const [field, setField] = useState("");

  return (
    <div>
      <label>{props.name}</label>
      <input
        type="text"
        name={props.name}
        onChange={e => {
          setField(e.target.value);
        }}
      />
    </div>
  );
}

export default Card;
