import RunButton from "./RunButton";

const Header = () =>  {

    return (
        <div className="card flex flex-row justify-between rounded-none h-16 bg-primary sticky top-0">
            <div className="flex flex-row gap-2">
                <img src="/logoX16.png" className="h-10 w-10 shadow-2xs"/>
                <h1 className="font-bold text-2xl">@GN</h1>
            </div>
            
            <RunButton/>
        </div>
    )
}
export default Header;