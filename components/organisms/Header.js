import HeadersBody from "../molecules/HeadersBody";
import Navbar from "../molecules/Navbar";

export default function Header() {
    return (
        <div className='mb-36 relative text-white'>
            <HeadersBody />
            <Navbar />
        </div>
    )
}