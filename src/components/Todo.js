import React from "react";
import TodoList from './TodoList';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todo: "",
          todos: [],
        };
    }


  submit = (e) => {
    e.preventDefault();
    // this.setState(previousState => {
    //     return {
    //   todos: [...previousState.todos, previousState.todo],
    //   todo: ''
    //     };
    // });
    this.setState({
        todos: [
            ...this.state.todos,
            
                this.state.todo
            
        ] ,
        todo : ''
    })
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
      
    let todoLists = this.state.todos.map((v,i) => {
        return (
        <TodoList
        key={i} 
        value={v}/> 
        )
    });
    return (
      <>
      <div className="list">
      <h1>To Do Lists</h1>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="todo"
            placeholder="Add todo items"
            value={this.state.todo}
            onChange={this.onChangeHandler}
          />
          <button className="btn" type="submit">Add</button>
        </form>
        <ul>{todoLists}</ul>
        <p className="footer">
            @ Developed by <span style={{ color: "red" }}>❤</span>Ayush
          </p>
        </div>
    </>
    );
  }
}

export default Todo;
