import { useState } from "react";
import reactLogo from "/react.svg";
import shiftkeyLogo from "/sk-icon.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://shiftkeylabs.ca/" target="_blank">
          <img src={shiftkeyLogo} className="logo" alt="Shiftkey logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Shiftkey Works Assessment</h1>
      {/* This is how you use Material UI */}
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <footer>
        <p className="read-the-docs">
          Created by{" "}
          <a href="https://vanshsood.com" target="_blank">
            Vansh Sood
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
