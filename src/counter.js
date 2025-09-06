import { useState } from "react";
import "./Counter.css";// ✅ make sure the path is correct

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <h1>Counter</h1>
            <div className="display">
                {count}
            </div>
            <div className="button-group">
                <button className="button-increment" onClick={() => setCount(count + 1)}>+</button>
                <button className="button-decrement" onClick={() => setCount(count - 1)}>-</button>
                <button className="button-reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>);

}

export default Counter;
