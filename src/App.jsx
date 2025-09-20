import BlocklyWorkspace from "./components/BlockWorkSpace";
import Scene from "./components/Canvas";
import CharSpace from "./components/CharManager";
import CodeSpace from "./components/CodeSpace";
import Header from "./components/Header"
import InputArea from "./components/Input";
import OutputArea from "./components/Output";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-1 bg-very-light">
        <Header/>

        <div className="flex flex-col md:flex-row w-full h-full gap-1">

          <div className="flex-col flex items-center w-full md:w-[60vw] h-full gap-1">
            <BlocklyWorkspace/>
            <div className="flex flex-row h-full w-full gap-1">
              <InputArea/>
              <OutputArea/>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[40vw] h-full gap-1">
            <Scene/>
            <div className="flex flex-row w-full h-full gap-1">
              <CodeSpace/>
              <CharSpace/>
            </div>
          </div>

        </div>

      </div>
  );
}
