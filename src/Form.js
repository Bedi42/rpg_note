import React, { useState } from "react";

export const Form = () => {
  const [character, setCharacter] = useState({
    name: "",
    class: "",
    race: "",
    startItems: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.name.value = "";
    event.target.class.value = "";
    event.target.race.value = "";
    event.target.startItems.value = "";
    console.log(character);
  };

  const handleChange = ({ target: { name, value } }) => {
    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label htmlFor="">Nazwa gracza</label>
      <input onChange={handleChange} type="text" name="name" />
      <label htmlFor="">Klasa postaci</label>
      <input onChange={handleChange} type="text" name="class" />
      <label htmlFor="">Rasa</label>
      <input onChange={handleChange} type="text" name="race" />
      <label htmlFor="">przedmioty początkowe</label>
      <input onChange={handleChange} type="textarea" name="startItems" />
      <button type="submit">Stwórz postać!</button>
    </form>
  );
};
