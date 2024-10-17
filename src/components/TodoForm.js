import { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

function TodoForm() {
  //   React hooks
  //  useState --

  const [name, setName] = useState("Jaloliddin");

  const [count, setCount] = useState(0);

  const [ismode, setIsmode] = useState(false);

  const decrementHandler = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const incermentHandler = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    setName("Samariddin");
  };

  const ModeToggleHandler = () => {
    ismode ? setIsmode(false) : setIsmode(true);
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>CHange</button>

      <div>
        <h1>{count}</h1>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incermentHandler}>increment</button>
      </div>

      <div>
        <button onClick={ModeToggleHandler}>
          {ismode ? <MdOutlineWbSunny /> : <LuMoon />}
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
