import { useContext } from "react";
import { Context } from "../Context";

const Scene = () => {
  const { characters, chosed } = useContext(Context);

  return (
    <div className="w-full aspect-video flex items-center justify-center bg-gray-200 overflow-clip rounded-2xl">
      <div
        className="relative w-[800px] aspect-video bg-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)",
          backgroundSize: "calc(100% / 16) calc(100% / 9)", // lưới chia đúng 800x450 theo tỉ lệ
        }}
      >
        {characters.map((ch) => (
          <div
            key={ch.id}
            className= {`absolute w-16 h-16 flex items-center justify-center shadow-md text-white font-bold origin-center 
              ${ch.id == chosed? "animate-pulse":""}`}
            style={{
              // nhân vật dùng % để khớp với hệ 800x450
              left: `${(ch.x / 800) * 100}%`,
              top: `${(ch.y / 450) * 100}%`,
              backgroundColor: ch.color || "yellow",
              transform: `rotate(${ch.direction || 0}deg)`,
            }}
          >
            {ch.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scene;
