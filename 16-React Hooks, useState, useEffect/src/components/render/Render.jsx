import { useState } from "react";
import { useEffect } from "react";

const Render = () => {
  const [name, setName] = useState("Asif");
  const [surname, setSurname] = useState("Poladov");

  useEffect(() => {
    console.log("Component ilk defe render olunur");
  }, []);

  useEffect(() => {
    console.log("Component Name deyisende render olunur");
  }, [name]);

  useEffect(() => {
    console.log("Component Surname deyisende render olunur");
  }, [surname]);

  const [count, setCount] = useState(0);

  let Increment = () => {
    setCount(count + 1);
  };

  let Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log("Component count deyisende render olunur");
  }, [count]);

  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
      <button onClick={() => setName("Ali")}>Change name</button>
      <button onClick={() => setSurname("Zeynalov")}>Change surname</button>

      <div>
        <button onClick={() => Decrement()}>decrement</button>
        <p>{count}</p>
        <button onClick={() => Increment()}>increment</button>
      </div>
    </div>
  );
};

export default Render;
