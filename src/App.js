import { Form } from "./components/Form";
import { database } from "./firebase.config";
import { useEffect, useState } from "react";
import { ref, onValue, set, push } from "firebase/database";
import { CharacterCard } from "./components/CharacterCard";
import { Title } from "./components/Title";
import "./scss/main.css";

function App() {
  const [characters, setCharacters] = useState({});
  const databaseRef = ref(database);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      setCharacters(data.characters);
    });
  }, [databaseRef]);

  const handleAdd = (character) => {
    push(ref(database, "/characters"), character);
    setIsRendered(false);
  };

  const handleUpdate = (char) => {
    set(ref(database, "/characters/" + char.id), char);
    setIsRendered(false);
  };

  return (
    <>
      <Title />
      {isRendered && <Form handleAdd={handleAdd} />}
      {!isRendered && (
        <CharacterCard characters={characters} handleUpdate={handleUpdate} />
      )}
    </>
  );
}

export default App;
