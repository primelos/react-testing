import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  console.log("color", color);
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(color === "red" ? "blue" : "red")}
      >
        Change to{color === "red" ? " blue" : " red"}
      </button>
    </div>
  );
}

export default App;
