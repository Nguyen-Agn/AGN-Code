import { useContext } from "react";
import { Context } from "../Context";

export default function InputArea() {
  const {inputValue} = useContext(Context);

  

  return (
    <div className="card w-full flex-col flex justify-center items-center">
      <textarea className="w-full h-full p-2 bg-white overflow-scroll hide-scrollbar" type='text' placeholder="Input"
      onChange={(e)=>(inputValue.current = e.target.value)}/>
    </div>
  );
}
