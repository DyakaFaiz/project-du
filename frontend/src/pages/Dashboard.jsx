import UserLayout from "../layout/UserLayout"
import Berita1 from "../assets/img/Berita1.png"
import { useState,useEffect } from "react"
import axios from "axios"

export default function Dashboard(){
const [data, setData] = useState([])
const apiCall = async () =>{
    const {data} = await axios.get('http://localhost:8080');
    setData(data)
}

useEffect(()=>{ 
    apiCall();
},[])

return(
    <UserLayout>
        <article className="gap-4 flex">
                {data.map((item, index) => (
                    <section key={index} className="shadow rounded w-1/4 p-3">
                        <img src={item} alt={item.judul} className="w-64 h-52"/>
                        <div className="mt-3">
                            <h1 className="font-bold text-lg">{item.judul}</h1>
                            <span className="bg-slate-500 text-white block px-2 w-fit rounded-lg mt-1">{item.category}</span>
                        </div>
                    </section>
                ))}
            </article>
    </UserLayout>
)
}