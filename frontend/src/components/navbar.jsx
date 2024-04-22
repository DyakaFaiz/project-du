export default function Navbar(){
    return(
        <nav className="w-full fixed flex md:gap-96 gap-5 p-5 bg-slate-600 text-white shadow-xl">
            <a href="" className="">Site Name</a>
            <ul className="flex gap-5">
                <li><a className="p-2 rounded-lg hover:bg-slate-200 hover:text-slate-600"  href="/">Home</a></li>
                <li><a className="p-2 rounded-lg hover:bg-slate-200 hover:text-slate-600"  href="/about">About</a></li>
            </ul>
        </nav>
    )
}