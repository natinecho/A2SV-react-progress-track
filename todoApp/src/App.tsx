import { useState } from "react";

import "./App.css";
import noItem from "../src/assets/hand-drawn-flat-design-shrug-illustration_23-2149316742.jpg"
import ListItem from "./component/listTtems";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";



function App() {
  const [Todo, setTodo] = useState<string[]>([]);
  const [Complete, setComplete] = useState<string[]>([]);
  const [Text, setText] = useState("");
  const [btn, setbtn] = useState("Add Task");
  const [editId, seteditId] = useState<number>(0);

  const AddItem = () =>{

    if (Text.trim()) {
      if (btn === "Add Task") {

        setTodo([...Todo, Text]);

        } else {
            // setTodo(Todo.slice(0,editId).concat(Text).concat(Todo.slice(editId + 1)))
            const updatedTodos = [...Todo];
            updatedTodos[editId] = Text;
            setTodo(updatedTodos);
            setbtn("Add Task");
        }
          setText("");
        }
  }


  const deleteItem = (index:number) => {
    setTodo(Todo.filter(item => item !== Todo[index]));
  }

  const ADDtocompleted = (index:number) => {
    setComplete([...Complete,Todo[index]]);
    setTodo(Todo.filter(item => item !== Todo[index]));
  }


  const editItem = (index:number) => {
    seteditId(index)
    setText(Todo[index])
    setbtn("Edit Item")
  }

  return (
    <>
      <div className="app-container">
        <h1>To-Do List</h1>
        <div>
            <input   type="text" id="taskInput"  placeholder="Add a new task"  value={Text}  required
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => AddItem()}> {btn}  </button>
        </div>
        {
          Todo.length !==0 || Complete.length !==0 ? (
            <>
              <ListItem Todo = {Todo} editItem = {editItem} deleteItem = {deleteItem}  ADDtocompleted = {ADDtocompleted}/>
              {console.log(Complete)}
              <div className="completed">
                Completed {Complete.length}

                {
                  Complete.map((task,index) =>(
                   <>
                   <li  key={index}>
                    <p className ="completedlist"
                    onClick={() => {
                      setTodo([...Todo,Complete[index]]);
                      setComplete(Complete.filter(item => item !== Complete[index]));
                      
                      }}   
                    >
                      <FaRegCircleCheck />
                      {task}
                      </p>
                    <p>
                        <button onClick={() => {
                            setComplete(Complete.filter(item => item !== Complete[index]));   
                          }}><FaTrash/></button>
                        </p>
            </li>
                   </> 
                  ))
                }
              </div>
            </>
        ):(<img src = {noItem}/>)
        }
      </div>
    </>
  );
}

export default App;
