import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = ({ counter }) => <h1>{counter}</h1>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => setCounter(counter + 1);
  const minusOne = () => setCounter(counter - 1);
  const backToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={addOne} text="Plus" />
      <Button handleClick={minusOne} text="Minus" />
      <Button handleClick={backToZero} text="Zero" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
