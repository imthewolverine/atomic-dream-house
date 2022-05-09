import HeadersBody from "../molecules/HeadersBody";
import Navbar from "../molecules/Navbar";

export default function Header(props) {
    console.log(props)
    return (
        <div className={props.className}>
            <HeadersBody/>
            <Navbar className={props.navbar.className}/>
        </div>
    )
}