import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let SpecialChar = "~!@#$%^&*()_-+=?><";

    if (numberAllowed) {
      string += number;
    }

    if (charactersAllowed) {
      string += SpecialChar;
    }

    for (let i = 1; i <= value; i++) {
      let index = Math.floor(Math.random() * string.length) + 1;
      pass += string.charAt(index);
    }

    setPassword(pass);
  }, [value, numberAllowed, charactersAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [value, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <>
      <div className=" flex justify-center w-screen h-screen bg-gray-900">
        <div className="w-1/3 h-1/3 justify-center flex flex-col items-center gap-10 bg-gray-800 top-10 rounded-md relative">
          <div className="text-4xl text-gray-300">Password Generator</div>
          <div className="flex items-center relative gap-5">
            <input
              className=" w-80 rounded-md h-10 px-2"
              id="password"
              placeholder="Password"
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={() => copyPasswordToClipboard()}
              className="bg-blue-800 rounded-md px-4 py-2 text-gray-300"
            >
              Copy
            </button>
          </div>
          <div className="flex relative gap-6 items-center">
            <div className="flex relative gap-2 items-center">
              <input
                onChange={(e) => setValue(e.target.value)}
                id="value"
                type="range"
              />
              <label className="text-gray-300" for="value">
                Value--({value})
              </label>
            </div>
            <div className="flex relative gap-2 items-center">
              <input
                onChange={() => setNumberAllowed((prev) => !prev)}
                id="number"
                defaultChecked={numberAllowed}
                type="checkbox"
              />
              <label className="text-gray-300" for="number">
                Number
              </label>
            </div>
            <div className="flex relative gap-2 items-center">
              <input
                onChange={() => {
                  setCharactersAllowed((prev) => !prev);
                }}
                id="special"
                type="checkbox"
                defaultChecked={charactersAllowed}
              />
              <label className="text-gray-300" for="special">
                Special Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
