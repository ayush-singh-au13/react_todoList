import React, { useState } from "react";


import TodoList from "./TodoList";
import "./Todo.css";

const TodoFunc = () => {
  const [state, setState] = useState({
    todo: "",
    todos: [],
  });

  const submit = (e) => {
    e.preventDefault();
    setState({
      todos: [...state.todos, state.todo],
        todo: "",
    });
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const clickHandler = (name) => {
        let newTodo = state.todos.filter((v) => v !== name)
        setState({
          ...state,
          todos: newTodo
        });

     console.log(newTodo);   

  }

  let todoLists = {};
  const renderingTodo = () => {
    return state.todos.map((v,i) => {
      
      todoLists = <div  key={i} className="remove_list">
                    <TodoList  value={v}  />
                    
                    <button type="button" className="btn-primary" onClick={() => clickHandler(v)}>Remove</button>
                  </div>;
      return todoLists;
    });
  };
  // console.log(todoLists);
  
  return (
    <>
      <div className="list">
        <h1>To Do Lists</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            name="todo"
            placeholder="Add todo items"
            value={state.todo}
            onChange={onChangeHandler}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
        <ul>
          {renderingTodo()}
        </ul>

        {/* <ul>{todoLists}</ul> */}
      </div>
    </>
  );
};

export default TodoFunc;
