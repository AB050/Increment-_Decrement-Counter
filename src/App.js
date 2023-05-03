import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => (prevCount += 1));
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-8">{count}</h1>
        <div className="flex justify-center items-center">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md mr-3"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
