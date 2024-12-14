import { createSignal } from "solid-js";
// @ts-ignore
import React from "react";

const Counter: React.FC = () => {
    const [count, setCount] = createSignal<number>(0);

    const increment = () => setCount(count() + 1);
    const decrement = () => setCount(count() - 1);
    const multiply = () => setCount(count() * 2);

    return (
        <div>
            <h2>Counter: {count()}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={multiply}>*</button>
        </div>
    );
};

export default Counter;
