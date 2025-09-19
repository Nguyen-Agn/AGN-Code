import { Context } from "../Context";
import { useState, useEffect, useContext } from "react";

export default function CodeSpace() {
    const {characters, chosed} = useContext(Context);
    const character = characters.find((c)=> c.id === chosed)
  const [code, setCode] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setCode(character.codeRef.current);
    }, 500); // update nhẹ nhàng
    return () => clearInterval(id);
  }, [chosed]);

  return (
    <div className="card w-full h-full font-mono text-sm whitespace-pre-wrap overflow-scroll hide-scrollbar grow-0">
      {code || "// chưa có code Javascript"}
    </div>
  );
}
