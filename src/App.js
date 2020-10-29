import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./css/App.css";
import Todo from "./components/Todo";
import db from "./firebase/firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodods] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodods(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // Doesn't refresh the page after each submit
    event.preventDefault();
    // Pushes the new item in the todo list
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodods([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>This is your Todo App! 📝</h1>
      <form>
        <FormControl>
          <InputLabel>➡ Write a Todo </InputLabel>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
