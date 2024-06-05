import { useState } from "react";

export function InputField({ toDo, setTodo, string, spremiString }) {
  //   const [string, spremiString] = useState("");

  function postaviString() {
    const noviZadaatak = string;
    setTodo([...toDo, noviZadaatak]);
    console.log(toDo);
    console.log(string);
  }

  return (
    <>
      <div className="inputFieldArea">
        <input
          className="inputField"
          onChange={(e) => spremiString(e.target.value)}
        ></input>
        <button className="addButton" onClick={postaviString}>
          ADD
        </button>
      </div>
    </>
  );
}
