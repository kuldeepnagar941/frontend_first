
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,multiple,divide, incrementByAmount } from "../Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(multiple())}>Multiple</button>
      <button onClick={() => dispatch(divide())}>Divide</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
