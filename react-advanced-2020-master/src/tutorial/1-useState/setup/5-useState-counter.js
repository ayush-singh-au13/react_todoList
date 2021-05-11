import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState({
    count: 0
  });
  
  const decreaseClick = (e) => {
    e.preventDefault();
    if (counter.count > 0) {
      setCounter({count: counter.count - 1});
    }
  };

  const resetClick = (e) => {
    e.preventDefault();
    setCounter({count: 0});
  };

  const increaseClick = (e) => {
    e.preventDefault();
    setCounter({count: counter.count + 1});
  };

  const increaseDelayClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setCounter((prevState) => {
        return {count: prevState.count+1};
      });
    },3000);
  }
  return (
    <>
      <h2 style={{ marginBottom: "2.25rem" }}>Regular Counter</h2>
      <h2>{counter.count}</h2>
      <button type="button" className="btn" onClick={decreaseClick}>
        Decrease
      </button>
      <button type="button" className="btn" onClick={resetClick}>
        Reset
      </button>
      <button type="button" className="btn" onClick={increaseClick}>
        Increase
      </button>
      
      {/* delay counter increase */}
      <div style={{ marginBottom: "2.5rem" }}></div>
      <h2 style={{ marginBottom: "2.25rem" }}>Delayed Increase Counter</h2>
      <h2>{counter.count}</h2>
      <button type="button" className="btn" onClick={increaseDelayClick}>
        Increase later
      </button>
    </>
  );
};

export default UseStateCounter;
