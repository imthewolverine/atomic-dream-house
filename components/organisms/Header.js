import HeadersBody from "../molecules/HeadersBody";
import Navbar from "../molecules/Navbar";

export default function Header(props) {
    console.log(props.props.className)
    return (
        <div className={props.props.className}>
            <HeadersBody/>
            <Navbar className={props.props.navbar.className}/>
        </div>
    )
}