import React, { useState } from "react";

export const CharacterCard = ({ characters, handleUpdate }) => {
  const arrOfCharacters = Object.values(characters);
  for (const key in characters) {
    characters[key]["id"] = key;
  }

  const [char, setChar] = useState(arrOfCharacters[arrOfCharacters.length - 1]);
  // const char = arrOfCharacters[arrOfCharacters.length - 1];

  const [newSkill, setNewSkill] = useState({
    skillName: "",
    description: "",
    level: "",
    chance: "",
  });

  const [isSkill, setIsSkill] = useState(false);
  char["skills"] = [newSkill];
  const handleSubmit = (e) => {
    e.preventDefault();
    setChar((prev) => ({
      ...prev,
      [newSkill]: newSkill,
    }));

    handleUpdate(char);
    setIsSkill(true);
    console.log(char);
  };

  const handleChange = ({ target: { name, value } }) => {
    setNewSkill((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        <ul>
          {isSkill &&
            char.skills.map((el) => {
              return (
                <>
                  <li>{el.skillName}</li>
                  <li>{el.description}</li>
                  <li>{el.level}</li>
                  <li>{el.chance}</li>
                </>
              );
            })}
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Dodaj umiejętność</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Nazwa umiejetność"
          name="skillName"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Opis umiejętności"
          name="description"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Poziom umiejętności"
          name="level"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Szansa trafienia"
          name="chance"
        />
        <button type="submit">Dodaj umiejętność</button>
      </form>
    </>
  );
};
