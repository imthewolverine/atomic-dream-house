
export default function Navbar(props) {
    return (
        <div className={props.className}>
            <div>
                <p className='text-4xl'>Logo</p>
            </div>
            <div className='space-x-40'>
                <a href="">About us</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
            <div className='border-l border-stone-400 py-5 pl-4'>
                <p>+1 310 998 13 55</p>
                <p>+1 321 998 14 55</p>
            </div>
        </div>
    )
}