import React, { useState } from "react";

export const CharacterCard = ({ characters }) => {
  const arrOfCharacters = Object.values(characters);
  const char = arrOfCharacters[arrOfCharacters.length - 1];
  for (const key in characters) {
    characters[key]["id"] = key;
  }
  const [skill, newSkill] = useState({
    name: "",
    description: "",
    level: "",
    chance: "",
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "5px 5px",
        }}
      >
        <span>{char.name}</span>
        <span>{char.race}</span>
        <span>{char.class}</span>
        <span>{char.startItems}</span>
        <span>{char.id}</span>
      </div>

      <form action="">
        <label htmlFor="">Dodaj umiejętność</label>
        <input
          key={"id"}
          type="text"
          placeholder="Dodaj umiejetność"
          name="newISkill"
          required
        />
        <button type="submit">Dodaj umiejętność</button>
      </form>
    </>
  );
};
