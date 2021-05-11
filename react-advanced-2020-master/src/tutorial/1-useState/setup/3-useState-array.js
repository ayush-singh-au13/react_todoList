import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [person, setPerson] = useState(data);

  const clickHandler = (id) => {
      let newPerson = person.filter(people => people.id !== id);
      setPerson([...newPerson]);
  };
  return (
    <>
      {person.map(people => {
        const { id, name } = people;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => clickHandler(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => {setPerson([])}}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
