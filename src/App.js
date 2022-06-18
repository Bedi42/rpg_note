import { Form } from "./Form";
import { database } from "./firebase.config";
import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { CharacterCard } from "./CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const databaseRef = ref(database);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      setCharacters(data.characters);
    });
  }, [databaseRef]);

  const handleAdd = (character) => {
    set(databaseRef, {
      characters: [...characters, character],
    });
    setIsRendered(false);
  };

  return (
    <>
      {isRendered && <Form handleAdd={handleAdd} />}
      {!isRendered && <CharacterCard characters={characters} />}
    </>
  );
}

export default App;
