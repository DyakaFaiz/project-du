export default function Footer(){
    return(
        <footer className="text-center text-surface bg-slate-700 text-gray-200">
          <div className="bg-black/5 p-2 text-center">
            <ul className="flex justify-center items-center gap-9">
                <li><a href="">Trend</a></li>
                <li><a href="">Terlama</a></li>
                <li><a href="">Relevan</a></li>
                <li><a href="">Advertise</a></li>
            </ul>
          </div>
          <div className="bg-black/5 p-1 text-center">Copyright 2008 - 2024 PT. SiteName. All Rights Reserved.</div>
        </footer>
    )
}