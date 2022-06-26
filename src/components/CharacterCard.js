import React from "react";

export const CharacterCard = ({ characters }) => {
  const char = characters[characters.length - 1];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5px 5px",
      }}
    >
      <span>{char.race}</span>
      <span>{char.startItems}</span>
      <span>{char.name}</span>
      <span>{char.class}</span>
    </div>
  );
};
