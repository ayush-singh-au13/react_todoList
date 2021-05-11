import React, { useState } from "react";

const UseStateBasics = () => {
  const [state, setState] = useState({
    title: "Random Title",
  });

  const clickHandler = (e) => {
    e.preventDefault();
    if (state.title === "Random Title") {
      setState({ title: "Title Changed" });
    } else {
      setState({ title: "Random Title" });
    }
  };
  return (
    <>
      <h3>{state.title}</h3>
      <button type="button" className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
