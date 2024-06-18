import { Link } from "react-router-dom"


export const AppBar = ()=> {
    return <div className="shadow h-14 flex justify-between">
        <Link to="/">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-xl">
            PaySwift App
        </div>
        </Link>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-m">
                    You
                </div>
            </div>
        </div>
        
    </div>
}