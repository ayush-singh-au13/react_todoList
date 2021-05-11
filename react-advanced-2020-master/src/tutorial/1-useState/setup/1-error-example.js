import React, { useState } from 'react';

const ErrorExample = () => {

  const [ state, setState ] = useState({
    title: 'Random Title'
  });

  const clickHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      title: 'Title Changed'
    })
  }
  return (
    <>
      <h3>{state.title}</h3>
      <button type="button" className="btn" onClick={clickHandler}>Change Titl</button>
    </>
  )
};

export default ErrorExample;
