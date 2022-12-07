import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Goto Market",
      desc: "You need to go to market need to get this job done1",
    },
    {
      sno: 2,
      title: "Goto Mall",
      desc: "You need to go to market need to get this job done2",
    },
    {
      sno: 3,
      title: "Goto Ghat",
      desc: "You need to go to market need to get this job done3",
    },
  ]);
  const onDelete = (todo) => {
    console.log("Im on delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let sno;
    console.log("Adding todo", title, desc);
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
