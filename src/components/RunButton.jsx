import { useContext } from "react"
import { Context } from "../Context"
import { BookCopy, Play } from "lucide-react";

const RunButton = () => {
    const {characters, setValue, resetInput, input, chosed} = useContext(Context);

    // resovle -> per character 
    const RunCode = (char,input) => {
        let output = [];
        const originalLog = console.log;
        console.log = (...args) => {
            output.push(args.join(" "));};
        try {
            const sandbox = { console, input , randomColor , ...CharBehaviour(char)};
            const func = new Function("sandbox", `with(sandbox) {${char.codeRef.current} }`);
            func(sandbox);
        } catch (err) {
            output.push("ERROR:", err);
        }

        console.log = originalLog; // khôi phục lại
        return output.join("\n"); 
    }


    const handleRun = () => {
    console.clear();
    resetInput();
    const allResult = characters.map((ch) => RunCode(ch,input));
    console.log(allResult);
    setValue(allResult);
}
    const handleRunSingle = () => {
    console.clear();
    resetInput();
    const character = characters.find((c)=> c.id === chosed)
    const result = RunCode(character,input);
    console.log([result]);
    setValue([result]);
}

    return (
        <div className="w-fit h-full flex gap-1 justify-center items-center">
            <button
                onClick={handleRun}
                className="button"
            >  <Play/> </button>
            <button
                onClick={handleRunSingle}
                className="button flex flex-row"
            >  <BookCopy/> <Play/> </button>

        </div>
    )
}

export default RunButton;


function CharBehaviour(char) {
  return {
    move: (steps) => {
      char.x += steps * Math.cos((char.direction * Math.PI) / 180);
      char.y += steps * Math.sin((char.direction * Math.PI) / 180);
    },
    turn: (angle) => {
      char.direction += angle;
    },
    setColor: (color) => {
      char.color = color;
    },
    direction: char.direction
  };
}
export function randomColor() {
  var num = Math.floor(Math.random() * 0x1000000);
  return '#' + ('00000' + num.toString(16)).substr(-6);
}
