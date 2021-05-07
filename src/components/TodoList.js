import React from 'react'
import './TodoList.css'
export default function TodoList(props) {
  // console.log(props);
    const { value} = props;
    return (
      <div className="todolist">
        <li style={{ listStyle: "none", color: "#e1701a", fontSize:"1.25rem" }}>
          {`✔ `}
          {value}
        </li>
        
      </div>
    );
}
