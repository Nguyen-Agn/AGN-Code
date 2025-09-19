import { useContext, useEffect } from "react";
import { Context } from "../Context";
import React from "react";
import { randomColor } from "./RunButton";

function CharSpace() {
    const { characters, setCharacters, chosed, setChosed } = useContext(Context);

const handleAdd = () => {
  const newChar = {
    id: characters.length,
    name: prompt("Character name: "),
    codeRef: React.createRef(),
    x: 400,
    y: 225,
    direction: 0,
    color: randomColor()
  };
  setCharacters([...characters, newChar]); // tạo mảng mới
};


  return (
    <div className="w-[15vw] card p-0 overflow-scroll hide-scrollbar">
      <h2 className="font-bold text-lg topbar">Characters</h2>
      <ul className="shadow-inner gap-2 m-2 flex flex-col">
        {characters.map((c) => (
          <li
            key={c.id}
            className={`card p-1 text-center cursor-pointer hover:-translate-0.5 ${
              c.id === chosed ? "bg-bold text-white rounded-xl " : "bg-very-light"
            }`}
            onClick={() => setChosed(c.id)}
          >
            {c.name}
          </li>
        ))}
      </ul>
      <button
        onClick={handleAdd}
        className="card hover:-translate-0.5 rounded-xs w-full bg-amber-400 p-1"
      >
        + Add
      </button>
    </div>
  );
}
export default CharSpace;