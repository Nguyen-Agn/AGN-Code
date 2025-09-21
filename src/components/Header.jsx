import RunButton from "./RunButton";
import Toolbar from "./toolbar";

const Header = () =>  {

    return (
        <div className="card flex flex-row justify-between rounded-none h-16 bg-primary sticky top-0">
            <div className="flex flex-row gap-2">
                <img src="/logoX16.png" className="h-10 w-10 shadow-2xs"/>
                <h1 className="font-bold text-2xl">Nguyen-Code</h1>
            </div>
            <RunButton/>
            <Toolbar />
 
        </div>
    )
}
export default Header;