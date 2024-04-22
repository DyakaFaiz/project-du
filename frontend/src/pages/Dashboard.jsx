import UserLayout from "../layout/UserLayout"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Dashboard() {
    const [data, setData] = useState([])
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const apiCall = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080');
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        apiCall();
    }, [])

    return (
        <UserLayout>
            {isLoading ? (
                <p>Loading...</p>
            ) : data.length <= 0 ? (
                <p>File not found</p>
            ) : error > 0 ? (
                <p>{error.message}</p>
            ) : (
                <article className="gap-4 flex">
                    {data.map((item, index) => (
                        <section key={index} className="shadow rounded w-1/4 p-3">
                            <img src={item.judul} alt={item.judul} className="w-64 h-52" />
                            <div className="mt-3">
                                <h1 className="font-bold text-lg">{item.judul}</h1>
                                <span className="bg-slate-500 text-white block px-2 w-fit rounded-lg mt-1">kategori</span>
                            </div>
                        </section>
                    ))}
                </article>
            )}
        </UserLayout>
    )
}
