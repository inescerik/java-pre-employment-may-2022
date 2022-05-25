import { useState } from "react";

function IncrementButton() {
  const [count, setCount] = useState(1);

  function Increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={Increment}>+</button>
    </div>
  );
}
function Exercise4() {
  return (
    <div>
      <div>
        <p>
          Use the useState React hook to track how many times a button is
          clicked, and display the number.
        </p>
        <div className="solution-container">
          <IncrementButton></IncrementButton>
        </div>
      </div>
    </div>
  );
}

export default Exercise4;
