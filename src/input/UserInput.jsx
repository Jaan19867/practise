// import React from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function UserInput({ addingCard }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interest, setInterest] = useState("");
  const [link, setLink] = useState("");

  function addTheUserInfo() {
    const info = {
      title: name,
      description: description,
      interest: interest,
      link: link,
    };

    addingCard(info);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          id="card_title"
          placeholder="plz write your name "
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          id="card_description"
          placeholder="plz explain about you"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          id="card_interes"
          placeholder="plz write your interest "
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          id="linkedin_id"
          placeholder="Plz write your linkedin id"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
      </div>

      <button onClick={addTheUserInfo}>Add the User </button>
    </div>
  );
}

export default UserInput;
