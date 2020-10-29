import { List, ListItem, ListItemText, Modal } from "@material-ui/core";
import React, { useState } from "react";
import db from "../firebase/firebase";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.text.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Write Wisely</h1>
          <input
            placeholder={props.text.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateTodo}>Update Todo</button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            secondary="Deadline ⏰"
            primary={props.text.todo}
          ></ListItemText>
        </ListItem>
        <button onClick={(e) => setOpen(true)}>EDIT</button>
        <DeleteForeverSharpIcon
          onClick={(e) => db.collection("todos").doc(props.text.id).delete()}
        />
      </List>
    </>
  );
}

export default Todo;
