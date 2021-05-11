import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'Random Message'
  });
  const clickHandler = (e) => {
    e.preventDefault();
    if(person.message === 'Random Message') {
    setPerson({...person, message: 'Hello world'});
    } else {
      setPerson({...person, message: 'Random Message'});
    }
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={clickHandler}> 
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
