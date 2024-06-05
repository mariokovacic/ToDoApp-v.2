import './css/App.css';
import './css/InputField.css';
import './css/ToDoItem.css';
// -----
import { useState } from 'react';
import { IoIosBackspace } from "react-icons/io";
// components
import { InputField } from './components/inputField';
import { ToDoItem } from './components/ToDoItem';

function App() {

  const [toDo, setTodo] = useState([]);
  const [string, spremiString] = useState("");

  return (
    <div className="App">
      <InputField setTodo={setTodo} toDo={toDo} spremiString={spremiString} string={string}></InputField>
      {toDo?.map((item) => (< ToDoItem string={string} key={item} item={item} toDo={toDo} setTodo={setTodo} spremiString={spremiString} />))}
    </div>
  );
}

export default App;
