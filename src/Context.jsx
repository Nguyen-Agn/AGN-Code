import React, { createContext, useRef, useState } from "react";

const Context = createContext();
    

const ContextProvider = ({children}) => {
    const codeRef = useRef("");
    const [value, setValue] = useState([]);
    const inputValue = useRef("")
    const inputIndex = useRef(0);
    const resetInput = () => {inputIndex.current=0};

    const input = {
      nextLine: () => {
        const lines = inputValue.current.split("\n");
        if (inputIndex.current < lines.length) { return lines[inputIndex.current++];}
          return "";},
      nextInt: () => {
        const val = input.nextLine();
        return parseInt(val, 10) || 0;
      }
  }

    const [characters, setCharacters] = useState([
  { id: 0, name: "Cat", codeRef: React.createRef(), x:400, y:10 , direction:30, color: "#125609",}
])


    const [chosed,setChosed] = useState(0)

  return (
    <Context.Provider value={{codeRef,
        characters, setCharacters,
        chosed, setChosed,
        value, setValue,
        inputValue, input, resetInput
         }}>
      {children}
    </Context.Provider>
  );
};

export {Context};
export default ContextProvider;
