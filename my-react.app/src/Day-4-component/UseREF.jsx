import { useRef } from "react";

function UseREF() {
  const inputRef = useRef(1);

  const handlerButton = () => {
    inputRef.current = inputRef.current + 1;

    console.log(inputRef.current);
  };

  return <div>
    <h2>value : {inputRef.current}</h2>
    <button onClick={handlerButton}>+</button>
  </div>;
}

export default UseREF;
