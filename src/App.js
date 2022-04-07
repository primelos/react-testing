import { useState } from "react";
import "./App.css";

export const replaceCamelCaseWithSpaces = (colorName) => {
  return colorName.replace(/([A-Z])/g, " $1").trim();
};
console.log(replaceCamelCaseWithSpaces("CarlosVenegas"));
function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [enable, setEnable] = useState(false);
  console.log("enable", enable);
  let newColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const handleClick = (e) => {
    setEnable(e.target.checked);
  };

  return (
    <div className="App">
      <button
        disabled={enable}
        style={{
          backgroundColor: enable ? "gray" : color,
          color: enable ? "white" : "yellow",
        }}
        onClick={() => setColor(newColor)}
      >
        Change to {newColor}
      </button>
      <label htmlFor="enable-button-checkbox">check test</label>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        aria-checked={enable}
        defaultChecked={enable}
        onChange={handleClick}
      />
    </div>
  );
}

export default App;
