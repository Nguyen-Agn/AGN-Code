import { useContext } from "react";
import { Context } from "../Context";
import React from "react";
import { randomColor } from "./RunButton";
import { Trash2 } from "lucide-react"; // icon thùng rác (lucide-react)

function CharSpace() {
  const { characters, setCharacters, chosed, setChosed } = useContext(Context);

  const handleAdd = () => {
    const newChar = {
      id: characters.length ? Math.max(...characters.map(c => c.id)) + 1 : 0,
      name: prompt("Character name: "),
      codeRef: React.createRef(),
      xml: "",
      x: 400,
      y: 225,
      direction: 0,
      color: randomColor(),
    };
    setCharacters([...characters, newChar]);
  };

 const handleDelete = (id) => {
  if (characters.length <= 1) {
    alert("Cần ít nhất 1 nhân vật để code!");
    return;
  }

  const newChars = characters.filter((c) => c.id !== id);
  setCharacters(newChars);

  if (chosed === id) {
    // Nếu xóa cái đang chọn, thì setChosed sang nhân vật đầu tiên còn lại
    setChosed(newChars[0].id);
  }
};


  return (
    <div className="w-[40vw] md:w-[15vw] card p-0 overflow-scroll hide-scrollbar">
      <h2 className="font-bold text-lg topbar">Characters</h2>
      <ul className="shadow-inner gap-2 m-2 flex flex-col">
        {characters.map((c) => (
          <li
            key={c.id}
            className={`group relative flex items-center justify-between card p-1 cursor-pointer hover:-translate-0.5 ${
              c.id === chosed
                ? "bg-bold text-white rounded-xl"
                : "bg-very-light"
            }`}
          >
            {/* Tên nhân vật */}
            <span onClick={() => setChosed(c.id)} className="flex-1 text-center">
              {c.name}
            </span>

            {/* Nút xoá, ẩn cho đến khi hover */}
            <button
              onClick={() => handleDelete(c.id)}
              className="absolute right-2 hidden group-hover:flex items-center cursor-pointer hover:text-red-600"
            > <Trash2 size={15}/>
            </button>
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
