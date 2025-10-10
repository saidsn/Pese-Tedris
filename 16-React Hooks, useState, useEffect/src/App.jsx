import { useState } from "react";
import "./App.css";
import Render from "./components/render/Render";

function App() {
  const [firstInputValue, setFirstInputvalue] = useState("");
  const [secondInputValue, setSecondInputvalue] = useState("");

  const [result, setResult] = useState(0);

  let setEmptyInputvalue = () => {
    setFirstInputvalue("");
    setSecondInputvalue("");
  };

  let CheckInputValue = () => {
    if (firstInputValue === "" || secondInputValue === "") {
      alert("please enter number");
      return false;
    }
    return true;
  };

  let Sum = () => {
    if (!CheckInputValue()) return;
    setResult(Number(firstInputValue) + Number(secondInputValue));
    setEmptyInputvalue();
  };

  let Divide = () => {
    if (!CheckInputValue()) return;

    if (Number(secondInputValue) === 0) {
      alert("Cannot divide by zero");
      setEmptyInputvalue();
      return;
    }

    setResult(Number(firstInputValue) / Number(secondInputValue));
    setEmptyInputvalue();
  };

  return (
    <>
      <div>
        <input
          value={firstInputValue}
          type="number"
          onChange={(e) => setFirstInputvalue(e.target.value)}
        />
        <input
          value={secondInputValue}
          type="number"
          onChange={(e) => setSecondInputvalue(e.target.value)}
        />
      </div>

      <p>{result}</p>

      <div>
        <button style={{ padding: "5px 20px" }} onClick={() => Sum()}>
          +
        </button>
        <button style={{ padding: "5px 20px" }} onClick={() => {}}>
          -
        </button>
        <button style={{ padding: "5px 20px" }} onClick={() => {}}>
          *
        </button>
        <button style={{ padding: "5px 20px" }} onClick={() => Divide()}>
          /
        </button>
      </div>
    </>
  );
}

export default App;
