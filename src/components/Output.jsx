import { useContext } from "react";
import { Context } from "../Context";

export default function OutputArea() {
  const {value} = useContext(Context);

  

  return (
    <div className="card w-full flex-col flex justify-center items-center">
      <p className="w-full h-full whitespace-pre-wrap bg-white overflow-scroll hide-scrollbar" > {value.join("\n") || "Output"}  </p>
    </div>
  );
}
