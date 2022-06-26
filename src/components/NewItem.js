import React, { useState } from "react";

export const NewItem = () => {
  const [itemName, setItemName] = useState("");

  const createItem = () => {};
  const handleChange = () => {};

  return (
    <form onSubmit={createItem}>
      <input
        type="text"
        placeholder="Dodaj umiejętność"
        value={itemName}
        required
        onChange={handleChange}
      />
      <button type="submit">Dodaj umiejętność</button>
    </form>
  );
};
