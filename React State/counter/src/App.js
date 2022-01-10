import React, { useState } from "react";

const App = () => {
  const [incrementCounter, setCounter] = useState(0);

  const incrementCountHandler = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  const decrementCountHandler = () => {
    setCounter((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div>
      <h1>
        Counter: <span>{incrementCounter}</span>
      </h1>
      <button onClick={incrementCountHandler}>Increment Count</button>
      <button onClick={decrementCountHandler}>Decrement Count</button>
    </div>
  );
};

export default App;
