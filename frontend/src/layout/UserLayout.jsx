import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function UserLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="w-full h-screen mt-24 flex justify-center">
                <div className="shadow-lg w-9/12 p-8 h-fit">
                {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
