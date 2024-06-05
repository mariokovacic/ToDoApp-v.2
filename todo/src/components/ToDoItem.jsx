import { IoIosBackspace, IoIosBrush } from "react-icons/io";
import { useEffect, useState } from "react";
import { InputField } from "./inputField";
export function ToDoItem({ string, item, toDo, setTodo, spremiString }) {
  const [updatedTodos, updateTodo] = useState(false);
  const [newString, setNewString] = useState("");
  function deleteItem(objekt) {
    setTodo(toDo.filter((item) => objekt !== item));
  }

  useEffect(() => {
    setNewString(item);
  }, []);
  function edit() {
    updateTodo(true);
  }

  function doneEditing() {
    updateTodo(false);
  }
  return (
    <>
      <div className="toDoCard">
        <div className="Item">{newString}</div>
        <IoIosBrush onClick={(e) => edit(e)}></IoIosBrush>
        {updatedTodos && item ? (
          <>
            {" "}
            <input
              className="inputFieldEditing"
              onChange={(e) => setNewString(e.target.value)}
            ></input>
            <button className="done" onClick={doneEditing}>
              DONE
            </button>
          </>
        ) : (
          <></>
        )}
        <IoIosBackspace
          className="backSpace"
          onClick={() => deleteItem(item)}
        />
      </div>
    </>
  );
}
