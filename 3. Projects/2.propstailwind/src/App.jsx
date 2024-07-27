import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

// we can import one component and use it in the Other component.
// Whatever data we define in the imported Card Component (e.g - <Card userName="Rohan" />), we can access this data in the Props object in actual Card Component function.
// Accordingly we can set different properties or values for same component used multiple times.

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "hello",
    age: 15,
  };

  return (
    <>
      <h1 className="bg-red-400">Hello there</h1>
      <br />
      <Card userName="Rohan" obj={myObj} btnText="Touch it" />
      <Card userName="Shyam" obj={myObj} btnText="click me new" />
    </>
  );
}

export default App;
