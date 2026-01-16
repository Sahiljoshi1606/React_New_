import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const [prev, setPrev] = useState(null);

  const handleNumber = (num) => {
    setValue(value + num);
  };

  const handleOperator = (op) => {
    setPrev(Number(value));
    setValue("");
    setOperator(op);
  };

  const calculate = () => {
    const current = Number(value);
    let result = 0;

    if (operator === "+") result = prev + current;
    if (operator === "-") result = prev - current;
    if (operator === "*") result = prev * current;
    if (operator === "/") {
      if (current === 0) {
        setValue("Cannot divide by zero");
        return;
      }
      result = prev / current;
    }

    setValue(String(result));
    setOperator("");
    setPrev(null);
  };

  const clearAll = () => {
    setValue("");
    setOperator("");
    setPrev(null);
  };

  return (
    <div>
      <h2>Calculator</h2>

      <input type="text" value={value}  />
      <br /><br />

      <div>
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("/")}>/</button>
      </div>

      <div>
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("*")}>*</button>
      </div>

      <div>
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("-")}>-</button>
      </div>

      <div>
        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={clearAll}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleOperator("+")}>+</button>
      </div>
    </div>
  );
}
