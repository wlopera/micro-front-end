import React, { useState } from "react";

const App = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const changeHandler = (type) => {
    setCounter((prevCounter) => prevCounter + type);
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>Contador: {counter}</h3>
      <button onClick={() => changeHandler(-1)}>Decrementar</button>
      <button onClick={() => changeHandler(1)}>Incrementar</button>
    </>
  );
};

export default App;
